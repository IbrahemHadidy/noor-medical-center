import { useSidebar } from '@/components/ui/sidebar';
import { useLoginMutation } from '@/lib/api/endpoints/auth';
import { setUser } from '@/lib/features/auth/auth.slice';
import { useRouter } from '@/lib/i18n/navigation';
import { useAppDispatch } from '@/lib/store';
import { getErrorMessage } from '@/lib/utils/get-error-message';
import { type LoginData } from '@/lib/validations/login';
import { toast } from 'sonner';

export const useLoginSubmit = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setOpen } = useSidebar();
  const [loginUser, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (data: LoginData) => {
    const user = await loginUser(data).unwrap();
    dispatch(setUser(user));
    router.push('/dashboard');
    setOpen(true);
    toast.success('Login successful');
  };

  return {
    handleLogin,
    isLoading,
    error: getErrorMessage(error),
  };
};
