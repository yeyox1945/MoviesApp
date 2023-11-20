import { useEffect, useState } from "react";

export const useMoviePagination = () => {

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(false);

    useEffect(() => {
        if (page === 10) {
            toggleLastPage();
        }
    }, [page]);

    const loadNextPage = () => setPage(page + 1);

    const toggleLastPage = () => setLastPage(!lastPage);

    return {
        page,
        lastPage,
        loadNextPage,
        toggleLastPage,
    }
}