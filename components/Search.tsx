"use client";
import {SyntheticEvent} from 'react';
import {useRouter} from "next/navigation";

const Search = () => {

    const router = useRouter();
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData);
        if (!`${values.search}`.trim()) return null
        router.push(`/search/${`${values?.search}`.trim()}`);
    }

    return (
        <div className='relative'>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="search"
                    className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
            </form>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    id='search'
                    name='search'
                    className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-700/40 border-gray-600 placeholder-gray-400 text-white focus:border-blue-500'
                    placeholder='Search...'
                    required
                    data-popover-target='popover-password'
                    data-popover-placement="bottom"
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;