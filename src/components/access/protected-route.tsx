'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { useAppSelector } from '@/lib/store';
import type { Role } from '@prisma/client';
import { type ReactNode, useEffect } from 'react';

export function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles?: Role[];
}) {
  const router = useRouter();
  const { user, isInitialized } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isInitialized) return;

    if (!user) {
      router.replace('/login');
    } else if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.replace('/unauthorized');
    }
  }, [isInitialized, user, allowedRoles, router]);

  return <>{children}</>;
}
