import {
    getCasting, getCastMovie,
    getPopularMovie, getSearchMulti, getSimilar, getTopRatedMovie, getUpcomingMovie

} from "@/services/tmdbRequest";
import { QueryKey, useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetMoviePopular = (queryKey: QueryKey) => {
    return useInfiniteQuery({
        queryKey,
        queryFn: (context) => {
            console.log({ context });
            return getPopularMovie(context?.pageParam);
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.total_pages) return pages.length + 1;
            else return undefined;
        },
    });
};

export const useGetMovieTopRated = (queryKey: QueryKey) => {
    return useInfiniteQuery({
        queryKey,
        queryFn: (context) => {
            return getTopRatedMovie(context?.pageParam);
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.total_pages) return pages.length + 1;
            else return undefined;
        },
    });
};

export const useGetMovieUpcoming = (queryKey: QueryKey) => {
    return useInfiniteQuery({
        queryKey,
        queryFn: (context) => {
            return getUpcomingMovie(context?.pageParam);
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.total_pages) return pages.length + 1;
            else return undefined;
        },
    });
};

export const useGetCasting = (queryKey: QueryKey, movie_id: number) => {
    return useQuery(queryKey, () => getCasting(movie_id));
};

export const useGetSimilar = (queryKey: QueryKey, movie_id: number) => {
    return useQuery(queryKey, () => getSimilar(movie_id));
};

export const useGetCastMovie = (queryKey: QueryKey, cast_id: number) => {
    return useQuery(queryKey, () => getCastMovie(cast_id));
};

export const useSearchMulti = (queryKey: QueryKey, query?: string) => {
    return useInfiniteQuery({
        queryKey,
        queryFn: (context) => getSearchMulti(context?.pageParam || 1, query),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.total_pages) return pages.length + 1;
            else return undefined;
        },
    });
};