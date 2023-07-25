import React from 'react';
import {getTopRatedMovie} from "@/services/tmdbRequest";
import {numberWithCommas} from "@/lib/number";
import MovieList from "@/app/top-rated/MovieList";

const TopRated = async () => {
    const topRated = await getTopRatedMovie();

    return (
        <main className="min-h-screen max-w-5xl mx-auto px-4 lg:px-0">
            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-4">Top Rated</h1>
                <p className="text-gray-400">
                    List of movies and TV Shows.
                </p>
            </div>
            <div className="space-y-4">
                <p className="text-gray-400">
                    <strong className="text-2xl mr-1">All </strong>(
                    {numberWithCommas(topRated?.total_results)})
                </p>
                <MovieList movies={topRated}/>
            </div>
        </main>
    );
};

export default TopRated;