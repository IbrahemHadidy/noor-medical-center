import { Logo } from '@/components/layout/logo';

export default function Loading() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center">
      <Logo loading className="w-full animate-pulse sm:max-w-sm md:max-w-md" />
    </div>
  );
}
