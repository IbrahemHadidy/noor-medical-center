'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormWithValidation } from '@/hooks/use-form-with-validation';
import { createAppointmentSchema, type AppointmentData } from '@/lib/validations/appointment';
import { AppointmentType } from '@generated/client';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface AppointmentFormProps {
  patientId?: string;
  doctorId: string;
  date: string;
  specialty: AppointmentType | null;
  selectedTime?: string;
  handleAppointmentSubmit: ({
    data,
    patientId,
    doctorId,
    scheduledFor,
    specialty,
  }: {
    data: AppointmentData;
    patientId: string;
    doctorId: string;
    scheduledFor: string;
    specialty: AppointmentType | null;
  }) => Promise<void>;
  error?: string;
  isLoading: boolean;
}

export default function AppointmentForm({
  patientId,
  doctorId,
  date,
  specialty,
  selectedTime,
  handleAppointmentSubmit,
  error,
  isLoading,
}: AppointmentFormProps) {
  const t = useTranslations('Booking');
  const form = useFormWithValidation<AppointmentData>(createAppointmentSchema(t));

  const handleBookingSubmit = async (data: AppointmentData) => {
    if (!doctorId || !selectedTime || !patientId) return;

    const scheduledFor = new Date(`${date}T${selectedTime}`).toISOString();

    await handleAppointmentSubmit({
      data,
      patientId,
      doctorId,
      scheduledFor,
      specialty,
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleBookingSubmit)} className="space-y-6">
        {/* Price Input */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('priceLabel')}</FormLabel>
              <FormControl>
                <Input
                  id="appointment-price"
                  type="number"
                  placeholder={t('pricePlaceholder')}
                  min={0}
                  step={0.01}
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Reason Textarea */}
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('reasonLabel')}</FormLabel>
              <FormControl>
                <Textarea
                  id="appointment-reason"
                  {...field}
                  placeholder={t('reasonPlaceholder')}
                  rows={4}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Error Messages */}
        {(error || form.formState.errors.root) && (
          <div className="space-y-2">
            {error && <p className="text-destructive text-sm">{error}</p>}
            {form.formState.errors.root && (
              <p className="text-destructive text-sm">{form.formState.errors.root.message}</p>
            )}
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <p className="text-white">{t('submitBooking')}</p>
          )}
        </Button>
      </form>
    </Form>
  );
}
