'use client';

import { Button } from '@/components/ui/button';
import { useDeactivateUserMutation, useVerifyUserMutation } from '@/lib/api/endpoints/admin';
import type { SafeUser } from '@/lib/types/user';
import { Role } from '@generated/client';
import { useTranslations } from 'next-intl';

export function ActionsColumn({ user }: { user: SafeUser }) {
  const t = useTranslations('AdminUsers');

  const [verifyUser, { isLoading: isVerifying }] = useVerifyUserMutation();
  const [deactivateUser, { isLoading: isDeactivating }] = useDeactivateUserMutation();

  return (
    <div className="flex space-x-2">
      <Button
        size="sm"
        disabled={
          isVerifying ||
          isDeactivating ||
          (user.role === Role.DOCTOR && user.isDoctorVerified) ||
          (user.role === Role.PATIENT && user.isEmailVerified) ||
          user.role === Role.ADMIN
        }
        onClick={() => verifyUser(user.id)}
      >
        <p className="text-white">{t('Actions.verify')}</p>
      </Button>
      <Button
        size="sm"
        variant="destructive"
        disabled={
          isVerifying ||
          isDeactivating ||
          user.role === Role.ADMIN ||
          (user.role === Role.DOCTOR && !user.isDoctorVerified) ||
          (user.role === Role.PATIENT && !user.isEmailVerified)
        }
        onClick={() => deactivateUser(user.id)}
      >
        <p className="text-white">{t('Actions.deactivate')}</p>
      </Button>
    </div>
  );
}
