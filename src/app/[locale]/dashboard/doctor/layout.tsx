import { ProtectedDoctorRoute } from '@/components/utils/protected-doctor-route';

export default async function DoctorDashboardLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedDoctorRoute>{children}</ProtectedDoctorRoute>;
}
