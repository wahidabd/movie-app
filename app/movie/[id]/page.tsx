import React from 'react';
import {getDetailMovie} from "@/services/tmdbRequest";
import NotFound from "@/components/NotFound";
import dayjs from "dayjs";
import PageHead from "@/components/PageHead";
import {TMDB_IMAGE_BASE_URL} from "@/constants/tmdb";
import MovieImage from "@/components/movie/MovieImage";
import Breadcrumb from "@/components/Breadcrumb";
import BreadcrumbAnchor from "@/components/BreadcrumbAnchor";
import {TiStarOutline} from "react-icons/ti";
import Trailer from "@/app/movie/[id]/Trailer";

const Movie = async ({params}: { params: { id?: string } }) => {

    const {id} = params || {};
    let data: any;
    try {
        data = await getDetailMovie(Number(id))
    } catch (error) {
        return <NotFound/>
    }
    const releaseDate = dayjs(data?.release_date)


    return (
        <>
            <PageHead
                title={data?.title}
                description={data?.description}
                ogImage={`${TMDB_IMAGE_BASE_URL}/w300${data?.backdrop_path}`}
            />

            <main className='min-h-screen max-w-5xl mx-auto my-10 relative'>
                <div className='max-h-[350px] rounded-xl overflow-hidden absolute top-0 left-0'>
                    <div
                        className="absolute w-full h-full"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(.jpg)",
                        }}
                    />
                    <MovieImage
                        src={`${data?.backdrop_path}`}
                        alt={data?.title}
                        width={2450}
                        height={400}
                        wImage='original'
                    />
                </div>

                <div className='px-4 md:px-10 w-full space-y-14 pt-20 sm:pt-72'>
                    <div className='rounded-xl border-l-slate-400/20 backdrop-blur-md p-4 md:w-1/2'>
                        <Breadcrumb>
                            <BreadcrumbAnchor>Movie</BreadcrumbAnchor>
                        </Breadcrumb>
                        <div className='flex items-center flex-wrap md:flex-nowrap justify-between gap-4'>
                            <div>
                                <h1 className='text-2xl font-bold min-w-0 break-words mt-4 mb-2'>
                                    {data?.title}{" "}
                                    <span className='font-normal'>
                                        {releaseDate.get("year")}
                                    </span>
                                </h1>
                                <div className='text-sm flex items-center'>
                                    <span className='bg-black/60 text-yellow-500 inline-flex items-center gap-1 p-1 rounded-md w-fit mr-2'>
                                        <TiStarOutline/>
                                        {data?.vote_average?.toFixed(1)}
                                    </span>
                                    {data?.vote_count} ratings
                                    <span className='inline-block h-1 w-1 rounded-full bg-current mx-2'/>
                                    {data?.runtime} mins
                                </div>
                            </div>
                            <Trailer videos={data?.videos?.results} />
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Movie;