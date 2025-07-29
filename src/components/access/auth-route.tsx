'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { useAppSelector } from '@/lib/store';
import { type ReactNode, useEffect } from 'react';

export function AuthRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isInitialized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isInitialized) return;

    if (user) {
      router.replace('/dashboard');
    }
  }, [isInitialized, user, router]);

  return <>{children}</>;
}
