import { useContext, useEffect, useState } from 'react';
import { ContentfulContext, ICacheContext } from '../providers';
import { CacheContext } from '../providers';

type UseContentResult<T> = [T[], string | undefined, boolean];

export const useContent = <T>(query: any): UseContentResult<T> => {
  const cache = useContext<ICacheContext>(CacheContext);
  const context = useContext(ContentfulContext);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const cacheKey = JSON.stringify(query);
        const cached = cache.data[cacheKey];
        if (cached) {
          setData(cached);
        } else {
          const response = await context.client?.getEntries<T>(query);
          const content = response?.items.map((i) => i.fields) || [];

          setData(content);
          cache.data[cacheKey] = content;
        }
      } catch (e) {
        console.error(e);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    })();
  }, [query, context.client, cache.data]);

  return [data, error, loading];
};
