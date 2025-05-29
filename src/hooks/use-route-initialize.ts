import { useAppDispatch } from '@/lib/store';
import type { UnknownAction } from '@reduxjs/toolkit';
import { useRef } from 'react';

export function useRouteInitialize(action: UnknownAction) {
  const dispatch = useAppDispatch();
  const initialized = useRef<boolean>(false);

  if (!initialized.current) {
    dispatch(action);
    initialized.current = true;
  }
}
