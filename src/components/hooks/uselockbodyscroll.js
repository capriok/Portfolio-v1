import { useLayoutEffect } from 'react';

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'initial';
  }, []);
}
