import React, {useMemo} from 'react';
import {TypeVideo} from "@/types";
import IconButton from "@/components/IconButton";
import {FaPlay} from "react-icons/fa";

const Trailer = (
    {
        videos
    }: {
        videos?: TypeVideo[]
    }
) => {

    const trailer = useMemo(
        () =>
            videos?.find?.((v) => v.type === "Trailer" || v.site === "YouTube") || {},
            [videos]
    )

    if (!trailer?.id) return null

    return (
        <a href={`https://www.youtube.com/watch?v=${trailer?.key}`} target="_blank">
            <IconButton title='Trailer'>
                <FaPlay size={20} className='ml-0.5' />
            </IconButton>
        </a>
    );
};

export default Trailer;