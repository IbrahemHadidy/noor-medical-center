import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { type ZodSchema } from 'zod';

export function useFormWithValidation<T extends FieldValues>(schema: ZodSchema<T>) {
  return useForm<T>({
    resolver: zodResolver(schema),
  });
}
