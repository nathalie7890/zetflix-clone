import useSWRImmutable from "swr/immutable";
import fetcher from "@/libs/fetcher";

const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSWRImmutable(
    "/api/favourites",
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useFavourites;
