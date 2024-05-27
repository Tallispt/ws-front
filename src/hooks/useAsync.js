import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);
  const toast = useToast()

  const act = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err);
      setLoading(false);
      toast({ title: err.message, colorScheme: 'red' })
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    setData,
    loading,
    error,
    act
  };
}
