export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <main className="container mx-auto flex-grow">{children}</main>;
}
