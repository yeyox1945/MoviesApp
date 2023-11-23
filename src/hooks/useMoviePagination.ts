import { useEffect, useState } from "react";

export const useMoviePagination = () => {

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(false);

    useEffect(() => {
        if (page === 5) {
            setLastPage(true);
        }
    }, [page]);

    const loadNextPage = () => !lastPage ? setPage(page + 1) : null;

    return {
        page,
        lastPage,
        loadNextPage,
    }
}