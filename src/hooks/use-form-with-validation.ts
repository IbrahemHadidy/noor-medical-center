import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type DefaultValues, type FieldValues, type UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export function useFormWithValidation<TFormValues extends FieldValues = FieldValues>(
  schema: z.ZodSchema<TFormValues, FieldValues>,
  defaultValues?: DefaultValues<TFormValues>
): UseFormReturn<FieldValues, unknown, TFormValues> {
  return useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });
}
