import { ProtectedPatientRoute } from '@/components/utils/protected-patient-route';

export default async function AppointmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedPatientRoute>
      <main className="container mx-auto flex-grow">{children}</main>{' '}
    </ProtectedPatientRoute>
  );
}
