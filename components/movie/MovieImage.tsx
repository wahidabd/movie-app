"use client"

import React, {useState} from 'react';
import Image, {ImageProps} from "next/image";
import {TMDB_IMAGE_BASE_URL} from "@/constants/tmdb";
import classNames from "classnames";

type ImageType = {
    wImage?: "w185" | "w300" | "w342" | "w500" | "original";
    imgClassName?: string;
} & ImageProps;

const MovieImage = (
    {
        wImage = "w185",
        src,
        alt,
        imgClassName,
        className,
        ...props
    }: ImageType
) => {

    const [status, setStatus] = useState("loading")

    console.log(src)

    return (
        <figure>
            <Image
                src={
                    status === "error"
                        ? "/logo.png"
                        : `${TMDB_IMAGE_BASE_URL}/${wImage}${src}`
                }
                alt={alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={classNames(
                    imgClassName,
                    'object-cover rounded-xl',
                    status === "loading" && "animate-pulse bg-slate-600"
                )}
                onError={() => setStatus("error")}
                onLoadingComplete={() => setStatus("complete")}
                {...props}
            />
        </figure>
    );
};

export default MovieImage;