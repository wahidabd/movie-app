import React from 'react';
import {getPopularMovie, getUpcomingMovie} from "@/services/tmdbRequest";
import {numberWithCommas} from "@/lib/number";
import MovieList from "@/app/upcoming/MovieList";

const Upcoming = async () => {
    const upcomingMovies = await getUpcomingMovie();

    return (
        <main className="min-h-screen max-w-5xl mx-auto px-4 lg:px-0">
            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-4">Popular</h1>
                <p className="text-gray-400">
                    List of movies and TV Shows.
                </p>
            </div>
            <div className="space-y-4">
                <p className="text-gray-400">
                    <strong className="text-2xl mr-1">All </strong>(
                    {numberWithCommas(upcomingMovies?.total_results)})
                </p>
                <MovieList movies={upcomingMovies}/>
            </div>
        </main>
    )
};

export default Upcoming;