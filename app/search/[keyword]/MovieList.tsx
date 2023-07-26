"use client";

import React, {Fragment, useEffect} from 'react';
import {useGetMoviePopular, useGetMovieTopRated, useSearchMulti} from "@/hooks/movie";
import {useInView} from "react-intersection-observer";
import MovieCard from "@/components/movie/MovieCard";
import {TypeMovie} from "@/types";
import {TYPE} from "@/constants/tmdb";
import SearchItem from "@/components/movie/SearchItem";

type Props = {}

const MovieList = ({keyword}: {keyword?: Props}) => {

    const {data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage} =
        useSearchMulti(['search', {keyword}])

    const {ref: endRef, inView} = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage?.()
    }, [inView, hasNextPage, isFetchingNextPage]);

    return (
        <div>
            <ul className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,_1fr))]'>
                {data?.pages?.map?.((group) => (
                    <Fragment
                    key={group.page}>
                        {group?.results?.map((movie) =>
                            <SearchItem key={movie?.id} data={movie}/>
                        )}
                    </Fragment>
                ))}
            </ul>
            {(isFetching || isFetchingNextPage) && (
                <div className='text-center py-4'>Loading...</div>
            )}
            {
                !!data?.pages?.[0]?.results?.length
                && hasNextPage && !isFetchingNextPage
                && !isFetching && <div ref={endRef} className='opacity-0 h-4'/>
            }
        </div>
    );
};

export default MovieList;