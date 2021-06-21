import { useContent } from './index';

type UseContentEntryResult<T> = [T | undefined, string | undefined, boolean];

export const useContentEntry = <T>(query: any): UseContentEntryResult<T> => {
  const [data, error, loading] = useContent<T>(query);
  return [data[0], error, loading];
};
