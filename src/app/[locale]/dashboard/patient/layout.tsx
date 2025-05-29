import { ProtectedPatientRoute } from '@/components/utils/protected-patient-route';

export default async function PatientDashboardLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedPatientRoute>{children}</ProtectedPatientRoute>;
}
