"use client";

import clsx from "clsx";
import style from "@/app/home.module.css";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const DetailMovie = ({ movies }: any) => {
   let [count, setCount] = useState<number>(0);
   const [movie, setMovie] = useState(movies[count]);

   const handleNextSlide = () => {
      setCount(++count);
      setMovie(movies[count]);
   };

   const handlePrevSlide = () => {
      setCount(--count);
      setMovie(movies[count]);
   };

   const slidePaginate = (index: number) => {
      setCount(index);
      setMovie(movies[index]);
   };

   return (
      <div id="hero" className={`${style.heroPattern} h-[480px] w-full relative flex justify-center items-center`} style={{ backgroundImage: `url('http://image.tmdb.org/t/p/w500${movie.backdrop_path}')` }}>

         {/* Prev Slide */}
         {count > 0 && <ArrowLeftCircleIcon className="h-10 md:h-12 absolute text-white top-1/2 bottom-1/2 left-3 md:left-5 cursor-pointer z-10" onClick={handlePrevSlide} />}

         {/* Detail */}
         <div className="h-full w-full flex items-center justify-center backdrop-blur ">
            <div className="carousel-detail flex flex-col items-center gap-2 z-0">
               <Image width={150} height={250} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="aspect-[4/5] object-cover rounded" />
               <div className="text-white mx-4 text-center">
                  <Link href={`/genre/popular/${movie.id}`} className="text-xl md:text-2xl mb-0.5">
                     <strong>{movie.title}</strong>
                  </Link>
                  {/* <DetailGenre id={movie?.id} /> */}

                  <TextOverview overview={movie?.overview} />
               </div>
            </div>
         </div>

         <div className={clsx(`absolute bottom-8 left-0 right-0 z-0 flex justify-center items-center gap-2`)}>
            {movies.map((_: unknown, i: number) => i < 10 && <span key={i} className={clsx(`inline-block ${i === count ? "h-3 w-3 bg-white" : "h-2 w-2 bg-neutral-500"} rounded-full cursor-pointer`)} onClick={() => slidePaginate(i)}></span>)}
         </div>

         {/* Next Slide */}
         {count < 9 && <ArrowRightCircleIcon className="h-10 md:h-12 absolute text-white top-1/2 bottom-1/2 right-3 md:right-5 cursor-pointer z-10" onClick={handleNextSlide} />}
      </div>
   );
};

const TextOverview = ({ overview }: { overview: string }) => {
   return (
      <>
         <p className="text-sm block md:hidden">{overview.substr(0, 100)}...</p>
         <p className="text-sm hidden md:block">{overview}</p>
      </>
   );
};

export default DetailMovie;
