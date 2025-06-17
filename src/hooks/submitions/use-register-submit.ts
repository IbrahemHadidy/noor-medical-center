import { useRegisterMutation } from '@/lib/api/endpoints/auth';
import { useRouter } from '@/lib/i18n/navigation';
import { getErrorMessage } from '@/lib/utils/get-error-message';
import { type RegisterData } from '@/lib/validations/register';
import { toast } from 'sonner';

export const useRegisterSubmit = () => {
  const router = useRouter();
  const [registerUser, { isLoading, error }] = useRegisterMutation();

  const handleRegister = async (data: RegisterData) => {
    await registerUser(data).unwrap();
    toast.success('Registration successful');
    router.push('/login');
  };

  return {
    handleRegister,
    isLoading,
    error: getErrorMessage(error),
  };
};
