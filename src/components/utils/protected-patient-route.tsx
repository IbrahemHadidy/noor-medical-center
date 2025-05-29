'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { useAppSelector } from '@/lib/store';
import { Role } from '@generated/client';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const ProtectedPatientRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else if (user.role !== Role.PATIENT) {
      toast.error('This page is only available for patients');
    }
  }, [user, router]);

  if (!user || user.role !== Role.PATIENT) {
    return null;
  }

  return <>{children}</>;
};
