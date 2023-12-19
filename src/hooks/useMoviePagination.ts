import { useState } from "react";

export const useMoviePagination = () => {
  const [page, setPage] = useState(1);
  const lastPage: boolean = page >= 5;

  const loadNextPage = () => (!lastPage ? setPage((prev) => prev + 1) : null);

  return {
    page,
    lastPage,
    loadNextPage,
  };
};
