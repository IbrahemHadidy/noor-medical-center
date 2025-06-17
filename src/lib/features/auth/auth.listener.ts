import { authApi } from '@/lib/api/endpoints/auth';
import type { AppDispatch, RootState } from '@/lib/store';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { clearUser, initializeAuth, setInitialized, setUser } from './auth.slice';

const authListener = createListenerMiddleware();
const listen = authListener.startListening.withTypes<RootState, AppDispatch>();

listen({
  actionCreator: initializeAuth,

  effect: async (_action, listenerApi) => {
    try {
      const result = await listenerApi.dispatch(authApi.endpoints.me.initiate());

      if ('data' in result && result.data && result.data !== null) {
        listenerApi.dispatch(setUser(result.data));
      } else {
        listenerApi.dispatch(clearUser());
      }
    } catch (error) {
      listenerApi.dispatch(clearUser());
      console.error(error);
    } finally {
      listenerApi.dispatch(setInitialized());
    }
  },
});

export default authListener;
