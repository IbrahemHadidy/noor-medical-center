import { useSidebar } from '@/components/ui/sidebar';
import { useLoginMutation } from '@/lib/api/endpoints/auth';
import { setUser } from '@/lib/features/auth/auth-slice';
import { useRouter } from '@/lib/i18n/navigation';
import { useAppDispatch } from '@/lib/store';
import { handleApiError } from '@/lib/utils/api-error-handler';
import { type LoginData } from '@/lib/validations/login';
import { toast } from 'sonner';

export const useLoginSubmit = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setOpen } = useSidebar();
  const [loginUser, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (data: LoginData) => {
    try {
      const user = await loginUser(data).unwrap();
      dispatch(setUser(user));
      router.push('/dashboard');
      setOpen(true);
      toast.success('Login successful');
    } catch (err) {
      handleApiError(err);
    }
  };

  return {
    handleLogin,
    isLoading,
    error: error && 'data' in error ? (error.data as Error).message : undefined,
  };
};
