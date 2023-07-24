"use client";

import React, {Fragment, useEffect} from 'react';
import {useGetMoviePopular} from "@/hooks/movie";
import {useInView} from "react-intersection-observer";
import MovieCard from "@/components/movie/MovieCard";

type Props = {}

const MovieList = ({movies}: {movies: Props}) => {

    const {data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage} =
    useGetMoviePopular(["popular", {movies}])

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
                            <MovieCard item={movie} key={movie?.id}/>
                        )}
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;