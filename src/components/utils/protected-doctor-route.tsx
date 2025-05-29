'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { useAppSelector } from '@/lib/store';
import { Role } from '@generated/client';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const ProtectedDoctorRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else if (user.role !== Role.DOCTOR) {
      toast.error('You are not authorized to access this page');
    }
  }, [user, router]);

  if (!user || user.role !== Role.DOCTOR) {
    return null;
  }

  return <>{children}</>;
};
