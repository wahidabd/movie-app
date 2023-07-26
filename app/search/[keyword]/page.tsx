import React from 'react';
import MovieList from "./MovieList";

const Search = async ({params}: {params: {keyword?: string}}) => {

    const {keyword} = params || {};

    return (
        <main className='min-h-screen max-w-5xl mx-auto my-10 relative'>
            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-4">Search</h1>
                <p className='text-gray-400'>{keyword}</p>
            </div>
            <MovieList keyword={keyword}/>
        </main>
    );
};

export default Search;