import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type FieldValues, type UseFormReturn } from 'react-hook-form';
import { type ZodTypeAny } from 'zod';

export function useFormWithValidation<TFieldValues extends FieldValues = FieldValues>(
  schema: ZodTypeAny
): UseFormReturn<TFieldValues> {
  return useForm<TFieldValues>({
    resolver: zodResolver(schema),
  });
}
