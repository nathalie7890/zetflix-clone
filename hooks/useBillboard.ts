import useSWR from 'swr'
import fetcher from '@/libs/fetcher';

const useBillboard = () => {
  const { data, error, isLoading } = useSWR('/api/random', fetcher);
  return {
    data,
    error,
    isLoading
  }
};

export default useBillboard;