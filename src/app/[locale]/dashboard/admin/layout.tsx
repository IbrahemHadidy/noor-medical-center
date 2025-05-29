import { ProtectedAdminRoute } from '@/components/utils/protected-admin-route';

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedAdminRoute>{children}</ProtectedAdminRoute>;
}
