'use client';

import Loading from '@/app/[locale]/loading';
import { initializeAuth } from '@/lib/features/auth/auth.slice';
import { type AppStore, makeStore } from '@/lib/store';
import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current!;
    store.dispatch(initializeAuth());

    // Wait for auth to initialize via the listener
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (state.auth.isInitialized) {
        setIsReady(true);
        unsubscribe();
      }
    });
  }, []);

  if (!isReady) {
    return <Loading />;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
