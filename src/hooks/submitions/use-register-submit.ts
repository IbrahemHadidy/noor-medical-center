import { useRegisterMutation } from '@/lib/api/endpoints/auth';
import { useRouter } from '@/lib/i18n/navigation';
import { handleApiError } from '@/lib/utils/api-error-handler';
import { type RegisterData } from '@/lib/validations/register';
import { toast } from 'sonner';

export const useRegisterSubmit = () => {
  const router = useRouter();
  const [registerUser, { isLoading, error }] = useRegisterMutation();

  const handleRegister = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();
      toast.success('Registration successful');
      router.push('/login');
    } catch (err) {
      handleApiError(err);
    }
  };

  return {
    handleRegister,
    isLoading,
    error: error && 'data' in error ? (error.data as Error).message : undefined,
  };
};
