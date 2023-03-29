import useSWRImmutable from "swr/immutable";

import fetcher from "@/libs/fetcher";

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSWRImmutable(
    id ? `/api/movies/${id}` : null,
    fetcher
  );

  return { data, error, isLoading };
};

export default useMovie