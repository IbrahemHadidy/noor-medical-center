import { faker } from '@faker-js/faker';
import {
  AppointmentStatus,
  AppointmentType,
  Gender,
  type Prisma,
  Role,
  type User,
} from '@generated/client';
import chalk from 'chalk';
import { createSaltedHash } from '../utils/encryption';
import { prismaWithLogging as prisma } from './prisma';

class DatabaseSeeder {
  // Configuration for dataset generation
  private readonly CONFIG = {
    doctors: {
      min: Object.keys(AppointmentType).length,
      max: 15,
    },
    patients: {
      min: 50,
      max: 200,
    },
    appointmentsPerPatient: {
      min: 5,
      max: 20,
    },
    passwordReset: {
      patientPercentage: 0.3,
    },
    verifiedDoctorProbability: 0.7,
  };

  private admin: User | null = null;
  private doctors: User[] = [];
  private patients: User[] = [];
  private startTime: number = Date.now();

  // Validate configuration parameters
  private validateConfig() {
    const { doctors, patients, appointmentsPerPatient, passwordReset, verifiedDoctorProbability } =
      this.CONFIG;

    if (doctors.min > doctors.max) {
      throw new Error('Invalid config: doctors.min cannot be greater than doctors.max');
    }

    if (patients.min > patients.max) {
      throw new Error('Invalid config: patients.min cannot be greater than patients.max');
    }

    if (appointmentsPerPatient.min > appointmentsPerPatient.max) {
      throw new Error(
        'Invalid config: appointmentsPerPatient.min cannot be greater than appointmentsPerPatient.max'
      );
    }

    if (passwordReset.patientPercentage < 0 || passwordReset.patientPercentage > 1) {
      throw new Error('Invalid config: passwordReset.patientPercentage must be between 0 and 1');
    }

    if (verifiedDoctorProbability < 0 || verifiedDoctorProbability > 1) {
      throw new Error('Invalid config: verifiedDoctorProbability must be between 0 and 1');
    }
  }

  // Wrapper for safe creation with error handling
  private async safeCreate<T>(operation: () => Promise<T>, entityName: string): Promise<T | null> {
    try {
      return await operation();
    } catch (error) {
      console.error(chalk.red(`Error creating ${entityName}:`), error);
      return null;
    }
  }

  public async run() {
    console.info(chalk.blue('\nStarting database seeding...'));
    this.validateConfig();

    await this.createAdmin();
    await this.createDoctors();
    await this.createPatients();
    await this.createAppointments();
    this.displayResults();
  }

  private async createAdmin() {
    console.info(chalk.blue('\nCreating admin...'));
    this.admin = await this.safeCreate(async () => {
      const adminUser = await prisma.user.create({
        data: {
          email: 'ibrahim.elhadidy@noormedical.com',
          password: await createSaltedHash('Ibrahim123!'),
          firstName: 'Ibrahim',
          lastName: 'Elhadidy',
          role: Role.ADMIN,
          gender: Gender.MALE,
          isEmailVerified: true,
          isDoctorVerified: true,
        },
      });

      await prisma.passwordReset.create({
        data: {
          userId: adminUser.id,
          token: 'TEST_RESET_TOKEN_ADMIN',
          expiresAt: new Date(Date.now() + 3600000),
        },
      });

      return adminUser;
    }, 'admin');

    if (!this.admin) {
      console.error(chalk.red('Admin creation failed. Aborting seeding.'));
      process.exit(1);
    }
    console.info(chalk.green(`Admin created: ${this.admin.email}`));
  }

  private async createDoctors() {
    const allSpecializations = Object.values(AppointmentType);
    const usedDoctorEmails = new Set<string>();

    // First create the required verified doctor - Noor Al-Imran
    console.info(chalk.blue('\nCreating required verified doctor...'));
    const requiredDoctor = await this.safeCreate(async () => {
      return prisma.user.create({
        data: {
          email: 'noor.al-imran@noormedical.com',
          password: await createSaltedHash('Noor123!'),
          firstName: 'Noor',
          lastName: 'Al-Imran',
          role: Role.DOCTOR,
          gender: Gender.FEMALE,
          isEmailVerified: true,
          isDoctorVerified: true,
          specializations: {
            create: [
              { type: AppointmentType.CARDIOLOGY },
              { type: AppointmentType.GENERAL_PRACTICE },
            ],
          },
          availability: {
            create: [
              { dayOfWeek: 1, startTime: '08:00', endTime: '16:00' },
              { dayOfWeek: 2, startTime: '08:00', endTime: '16:00' },
              { dayOfWeek: 3, startTime: '08:00', endTime: '16:00' },
              { dayOfWeek: 4, startTime: '08:00', endTime: '16:00' },
              { dayOfWeek: 5, startTime: '08:00', endTime: '16:00' },
            ],
          },
        },
      });
    }, 'required doctor');

    if (requiredDoctor) {
      this.doctors.push(requiredDoctor);
      usedDoctorEmails.add(requiredDoctor.email);
      console.info(chalk.green('Required doctor created: Noor Al-Imran'));
    }

    // Create one verified doctor per specialization
    console.info(chalk.blue(`\nCreating ${allSpecializations.length} specialist doctors...`));
    for (const specialization of allSpecializations) {
      const doctor = await this.safeCreate(
        () => this.createDoctor(specialization, true, usedDoctorEmails),
        `doctor (specialization: ${specialization})`
      );

      if (doctor) {
        this.doctors.push(doctor);
        usedDoctorEmails.add(doctor.email);
      } else {
        console.warn(chalk.yellow(`Skipped creating doctor for specialization: ${specialization}`));
      }
    }
    console.info(chalk.green(`${this.doctors.length} specialists created`));

    // Create additional doctors
    const minAdditional = Math.max(2, this.CONFIG.doctors.min - allSpecializations.length);
    const maxAdditional = this.CONFIG.doctors.max - allSpecializations.length;

    const additionalDoctorsCount =
      maxAdditional > 0
        ? faker.number.int({
            min: minAdditional,
            max: maxAdditional,
          })
        : 0;

    console.info(chalk.blue(`\nCreating ${additionalDoctorsCount} additional doctors...`));

    // Create at least one unverified doctor
    let unverifiedCount = 0;
    const targetUnverified = Math.max(1, Math.floor(additionalDoctorsCount * 0.3));

    for (let i = 0; i < additionalDoctorsCount; i++) {
      const specializations = faker.helpers.arrayElements(allSpecializations, { min: 1, max: 3 });

      let isVerified = true;
      if (unverifiedCount < targetUnverified) {
        isVerified = false;
        unverifiedCount++;
      } else {
        isVerified = faker.datatype.boolean({
          probability: this.CONFIG.verifiedDoctorProbability,
        });
      }

      const doctor = await this.safeCreate(
        () => this.createDoctor(specializations, isVerified, usedDoctorEmails),
        'additional doctor'
      );

      if (doctor) {
        this.doctors.push(doctor);
        usedDoctorEmails.add(doctor.email);
      }
    }
    console.info(chalk.green(`${additionalDoctorsCount} additional doctors created`));
  }

  private async createDoctor(
    specializations: AppointmentType | AppointmentType[],
    isVerified: boolean,
    usedEmails: Set<string>
  ) {
    const specializationArray = Array.isArray(specializations)
      ? specializations
      : [specializations];
    let email: string;

    do {
      email = `dr.${faker.person.firstName().toLowerCase()}.${faker.person.lastName().toLowerCase()}${faker.number.int({ min: 1, max: 999 })}@noormedical.com`;
    } while (usedEmails.has(email));

    return prisma.user.create({
      data: {
        email,
        phone: faker.phone.number().slice(0, 19),
        password: await createSaltedHash('Doctor123!'),
        firstName: faker.person.firstName().slice(0, 99),
        lastName: faker.person.lastName().slice(0, 99),
        role: Role.DOCTOR,
        gender: faker.helpers.enumValue(Gender),
        isEmailVerified: true,
        isDoctorVerified: isVerified,
        specializations: {
          create: specializationArray.map((type) => ({ type })),
        },
        availability: {
          create: this.generateDoctorAvailability(),
        },
      },
    });
  }

  private generateDoctorAvailability() {
    const workDays = [0, 1, 2, 3, 4];
    return workDays.map((day) => {
      const startHour = faker.number.int({ min: 8, max: 10 });
      const endHour = faker.number.int({
        min: Math.max(startHour + 4, 16),
        max: 19,
      });

      return {
        dayOfWeek: day,
        startTime: `${startHour}:00`,
        endTime: `${endHour}:00`,
      };
    });
  }

  private async createPatients() {
    const totalPatients = faker.number.int({
      min: this.CONFIG.patients.min,
      max: this.CONFIG.patients.max,
    });
    const usedPatientEmails = new Set<string>();
    const BATCH_SIZE = 50;
    const passwordResetTokens: Prisma.PasswordResetCreateManyInput[] = [];

    console.info(chalk.blue(`\nCreating ${totalPatients} patients in batches of ${BATCH_SIZE}...`));

    for (let i = 0; i < totalPatients; i += BATCH_SIZE) {
      const batchSize = Math.min(BATCH_SIZE, totalPatients - i);
      const batchData: Prisma.UserCreateManyInput[] = [];

      for (let j = 0; j < batchSize; j++) {
        const patientIndex = i + j;
        const email = `patient${patientIndex}@example.com`;

        if (usedPatientEmails.has(email)) {
          console.warn(chalk.yellow(`Duplicate patient email skipped: ${email}`));
          continue;
        }

        usedPatientEmails.add(email);

        batchData.push({
          email,
          phone: faker.phone.number().slice(0, 19),
          password: await createSaltedHash('Patient123!'),
          firstName: faker.person.firstName().slice(0, 99),
          lastName: faker.person.lastName().slice(0, 99),
          role: Role.PATIENT,
          gender: faker.helpers.enumValue(Gender),
          isEmailVerified: faker.datatype.boolean(),
        });
      }

      const createdBatch = await this.safeCreate(
        () =>
          prisma.user.createMany({
            data: batchData,
            skipDuplicates: true,
          }),
        `patient batch (${i + 1}-${i + batchSize})`
      );

      if (createdBatch) {
        console.info(
          chalk.blue(`  → Created batch ${i / BATCH_SIZE + 1}: ${createdBatch.count} patients`)
        );

        const emails = batchData.map((p) => p.email);
        const createdPatients = await prisma.user.findMany({
          where: { email: { in: emails } },
        });

        for (const patient of createdPatients) {
          if (Math.random() < this.CONFIG.passwordReset.patientPercentage) {
            passwordResetTokens.push({
              userId: patient.id,
              token: `RESET_${faker.string.alphanumeric(32)}_PATIENT`,
              expiresAt: faker.date.soon({ days: 1 }),
            });
          }
        }

        this.patients.push(...createdPatients);
      }
    }

    if (passwordResetTokens.length > 0) {
      await this.safeCreate(
        () => prisma.passwordReset.createMany({ data: passwordResetTokens }),
        'password reset tokens'
      );
      console.info(chalk.green(`Created ${passwordResetTokens.length} password reset tokens`));
    }

    console.info(chalk.green(`\n${this.patients.length} patients created`));
  }

  private async createAppointments() {
    let totalAppointments = 0;
    const appointmentBatchSize = 100;
    let appointmentBatch: Prisma.AppointmentCreateManyInput[] = [];
    let skippedAppointments = 0;

    console.info(chalk.blue(`\nCreating appointments in batches of ${appointmentBatchSize}...`));

    for (const patient of this.patients) {
      let appointmentCount = faker.number.int({
        min: this.CONFIG.appointmentsPerPatient.min,
        max: this.CONFIG.appointmentsPerPatient.max,
      });

      if (patient.isEmailVerified) {
        const doneAppointment = await this.createAppointment(patient, AppointmentStatus.DONE);
        const scheduledAppointment = await this.createAppointment(
          patient,
          AppointmentStatus.SCHEDULED
        );

        if (doneAppointment) appointmentBatch.push(doneAppointment);
        if (scheduledAppointment) appointmentBatch.push(scheduledAppointment);

        appointmentCount -= 2;
      }

      for (let i = 0; i < Math.max(appointmentCount, 0); i++) {
        const appointment = await this.createAppointment(patient);
        if (appointment) {
          appointmentBatch.push(appointment);
          totalAppointments++;
        } else {
          skippedAppointments++;
        }

        if (appointmentBatch.length >= appointmentBatchSize) {
          await this.safeCreate(
            () => prisma.appointment.createMany({ data: appointmentBatch }),
            `appointment batch (size: ${appointmentBatch.length})`
          );
          console.info(chalk.blue(`  → Created batch of ${appointmentBatch.length} appointments`));
          appointmentBatch = [];
        }
      }
    }

    if (appointmentBatch.length > 0) {
      await this.safeCreate(
        () => prisma.appointment.createMany({ data: appointmentBatch }),
        `appointment batch (size: ${appointmentBatch.length})`
      );
      console.info(
        chalk.blue(`  → Created final batch of ${appointmentBatch.length} appointments`)
      );
    }

    console.info(chalk.green(`\nCreated ${totalAppointments} appointments`));
    if (skippedAppointments > 0) {
      console.warn(chalk.yellow(`Skipped ${skippedAppointments} appointments due to errors`));
    }
  }

  private async createAppointment(patient: User, forcedStatus?: AppointmentStatus) {
    const doctor = faker.helpers.arrayElement(this.doctors);
    const specializations = await prisma.doctorSpecialization.findMany({
      where: { doctorId: doctor.id },
    });

    if (specializations.length === 0) {
      console.warn(
        chalk.yellow(
          `Warning: Doctor ${doctor.email} has no specializations. Skipping appointment creation.`
        )
      );
      return null;
    }

    const status = forcedStatus || faker.helpers.enumValue(AppointmentStatus);
    const now = new Date();
    const twoMonthsAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
    const oneMonthLater = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    let scheduledFor: Date;

    switch (status) {
      case AppointmentStatus.DONE:
        scheduledFor = faker.date.between({ from: twoMonthsAgo, to: now });
        break;
      case AppointmentStatus.SCHEDULED:
        scheduledFor = faker.date.between({ from: now, to: oneMonthLater });
        break;
      case AppointmentStatus.CANCELLED:
        scheduledFor = faker.date.between({
          from: faker.datatype.boolean() ? twoMonthsAgo : now,
          to: faker.datatype.boolean() ? now : oneMonthLater,
        });
        break;
      default:
        scheduledFor = faker.date.between({ from: twoMonthsAgo, to: oneMonthLater });
    }

    return {
      doctorId: doctor.id,
      patientId: patient.id,
      type: faker.helpers.arrayElement(specializations).type,
      status,
      price: faker.number.float({ min: 50, max: 300 }),
      notes: faker.datatype.boolean(0.3) ? faker.lorem.sentence() : null,
      scheduledFor,
    };
  }

  private displayResults() {
    const duration = (Date.now() - this.startTime) / 1000;
    console.info(
      chalk.bold.green(`\nDatabase seeded successfully in ${duration.toFixed(2)} seconds!`)
    );

    const verifiedDoctors = this.doctors.filter((d) => d.isDoctorVerified);
    const unverifiedDoctors = this.doctors.filter((d) => !d.isDoctorVerified);
    const verifiedPatients = this.patients.filter((p) => p.isEmailVerified);
    const unverifiedPatients = this.patients.filter((p) => !p.isEmailVerified);

    console.info(chalk.bold.cyan('\n=== Admin Account ==='));
    console.info(chalk.white(`- Email: ${chalk.yellow('ibrahim.elhadidy@noormedical.com')}`));
    console.info(chalk.white(`- Password: ${chalk.yellow('Ibrahim123!')}`));
    console.info(chalk.white(`- Test reset token: ${chalk.yellow('TEST_RESET_TOKEN_ADMIN')}`));

    console.info(chalk.bold.cyan('\n=== Required Doctor Account ==='));
    console.info(chalk.white(`- Email: ${chalk.yellow('noor.al-imran@noormedical.com')}`));
    console.info(chalk.white(`- Password: ${chalk.yellow('Noor123!')}`));
    console.info(chalk.white(`- Specializations: Cardiology, General Medicine`));

    console.info(chalk.bold.cyan('\n=== Doctor Accounts ==='));
    console.info(
      chalk.hex('#FFA500')(`All doctor accounts use password: ${chalk.yellow('Doctor123!')}`)
    );

    console.info(chalk.green('\nSample Verified Doctors:'));
    verifiedDoctors
      .slice(0, 3)
      .forEach((doc) =>
        console.info(
          chalk.white(
            `- Email: ${chalk.yellow(doc.email)} | Name: ${chalk.cyan(doc.firstName + ' ' + doc.lastName)}`
          )
        )
      );

    console.info(chalk.yellow('\nSample Unverified Doctors:'));
    unverifiedDoctors
      .slice(0, 3)
      .forEach((doc) =>
        console.info(
          chalk.white(
            `- Email: ${chalk.yellow(doc.email)} | Name: ${chalk.cyan(doc.firstName + ' ' + doc.lastName)}`
          )
        )
      );

    console.info(chalk.bold.cyan('\n=== Patient Accounts ==='));
    console.info(
      chalk.hex('#FFA500')(`All patient accounts use password: ${chalk.yellow('Patient123!')}`)
    );

    console.info(chalk.green('\nSample Verified Patients:'));
    verifiedPatients
      .slice(0, 3)
      .forEach((pat) =>
        console.info(
          chalk.white(
            `- Email: ${chalk.yellow(pat.email)} | Name: ${chalk.cyan(pat.firstName + ' ' + pat.lastName)}`
          )
        )
      );

    console.info(chalk.yellow('\nSample Unverified Patients:'));
    unverifiedPatients
      .slice(0, 3)
      .forEach((pat) =>
        console.info(
          chalk.white(
            `- Email: ${chalk.yellow(pat.email)} | Name: ${chalk.cyan(pat.firstName + ' ' + pat.lastName)}`
          )
        )
      );

    console.info(chalk.bold.cyan('\n=== Login Instructions ==='));
    console.info(
      chalk.white(`- Use "${chalk.yellow('Doctor123!')}" password for all doctor accounts`)
    );
    console.info(
      chalk.white(`- Use "${chalk.yellow('Patient123!')}" password for all patient accounts`)
    );
    console.info(chalk.white(`- Admin uses "${chalk.yellow('Noor123!')}" password`));
    console.info(chalk.gray('- Unverified accounts might require email verification workflow'));
    console.info(chalk.gray(`- Total seeding time: ${duration.toFixed(2)} seconds`));
  }
}

// Execute the seeder
new DatabaseSeeder()
  .run()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
