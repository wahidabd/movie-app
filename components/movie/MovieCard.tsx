import React from 'react';
import {TypeMovie} from "@/types";
import Link from "next/link";
import {TiStarOutline} from "react-icons/ti";
import MovieImage from "@/components/movie/MovieImage";
import classNames from "classnames";


const MovieCard = (
    {item, className}: {
        item: TypeMovie
        className?: string
    }
) => {
    return (
        <li className={classNames(
            className,
            "h-full rounded-md bg-slate-600/10 hover:bg-slate-400/20 pl-3 transition-all"
        )}>
            <Link href={`/movie/${item?.id}`}>
                <div className="relative w-full h-72 object-cover mb-3">
                    <span
                        className='absolute top-2 left-2 bg-black/60 text-yellow-500 z-10 flex items-center gap-1 p-1 px-1.5 text-sm rounded-md'>
                        <TiStarOutline/>
                        {item?.vote_average?.toFixed(1)}
                    </span>
                    <MovieImage
                        wImage="w342"
                        src={item?.poster_path || ""}
                        alt={item?.title || ""}
                        imgClassName="rounded-md object-cover"
                        fill
                    />
                </div>
                <p className='font-bold line-clamp-2'>{item.title}</p>
            </Link>
        </li>
    );
};

export default MovieCard;