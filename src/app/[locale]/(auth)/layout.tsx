export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="container mx-auto flex-grow">{children}</main>;
}
