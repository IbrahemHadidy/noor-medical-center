import { cn } from '@/lib/utils/cn';

export function DashboardCard({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'bg-card rounded-2xl border p-6 shadow-sm backdrop-blur-sm',
        'flex flex-col justify-between',
        className
      )}
    >
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="flex-1">{children}</div>
    </div>
  );
}
