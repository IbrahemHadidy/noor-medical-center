'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  useGetAppointmentByIdQuery,
  useUpdateAppointmentNotesMutation,
} from '@/lib/api/endpoints/appointment';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DoctorAppointmentNotesPage() {
  const t = useTranslations('DoctorNotes');
  const params = useSearchParams();
  const id = params.get('id')!;
  const { data: appt, isLoading } = useGetAppointmentByIdQuery(id);
  const [updateNotes, { isLoading: isSaving }] = useUpdateAppointmentNotesMutation();
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (appt?.notes) setNotes(appt.notes);
  }, [appt]);

  if (isLoading) return <p>{t('loading')}</p>;
  if (!appt) return <p>{t('notFound')}</p>;

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">{`${t('Appointment with')} ${appt.patient.firstName} ${appt.patient.lastName}`}</h1>
      <p>
        {appt.type} | {new Date(appt.scheduledFor!).toLocaleString()}
      </p>

      <div className="space-y-2">
        <label className="block font-medium">{t('notesLabel')}</label>
        <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={6} />
      </div>

      <Button disabled={isSaving} onClick={() => updateNotes({ id, notes }).unwrap()}>
        {isSaving ? t('saving') : t('saveNotes')}
      </Button>
    </div>
  );
}
