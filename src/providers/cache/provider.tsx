import { ReactNode } from 'react';
import { CacheContext } from './context';

export interface CacheProviderProps {
  children: ReactNode;
}

export const CacheProvider = ({ children }: CacheProviderProps) => {
  return <CacheContext.Provider value={{ data: {} }}>{children}</CacheContext.Provider>;
};
