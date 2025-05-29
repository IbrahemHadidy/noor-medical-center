'use client';

import { Button } from '@/components/ui/button';
import { useGetPendingDoctorsQuery, useVerifyDoctorMutation } from '@/lib/api/endpoints/admin';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

export default function VerifyDoctorsPage() {
  const t = useTranslations('Admin');
  const { data: doctors, isLoading, error } = useGetPendingDoctorsQuery();
  const [verifyDoctor, { isLoading: isVerifying }] = useVerifyDoctorMutation();

  const handleVerify = async (id: string) => {
    toast.promise(verifyDoctor(id).unwrap(), {
      loading: t('doctorVerifyLoading'),
      success: t('doctorVerifySuccess'),
      error: t('doctorVerifyError'),
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('verifyDoctors')}</h1>

      {isLoading ? (
        <p>{t('loading')}</p>
      ) : error ? (
        <p className="text-destructive">{t('Errors.loadingFailed')}</p>
      ) : doctors && doctors.length > 0 ? (
        <ul className="space-y-4">
          {doctors.map((doc) => (
            <li key={doc.id} className="flex items-center justify-between rounded border p-4">
              <div>
                <p className="font-medium">
                  {doc.firstName} {doc.lastName}
                </p>
                <p className="text-muted-foreground">{doc.email}</p>
              </div>
              <Button
                variant="secondary"
                onClick={() => handleVerify(doc.id)}
                disabled={isVerifying}
              >
                {t('verify')}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>{t('noPendingDoctors')}</p>
      )}
    </div>
  );
}
