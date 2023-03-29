import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMoviesList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocusL: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMoviesList;
