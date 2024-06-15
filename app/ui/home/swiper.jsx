"use client";

import Image from "next/image";
import Link from "next/link";
import { toSnakeCase } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import { CardRecommended } from "../cards";

const SwiperCarousel = ({ movies }) => {
   return (
      <swiper-container loop="true" speed="1000" grab-cursor="true" pagination="true" pagination-clickable="true" autoplay>
         {movies.map(
            (movie, i) =>
               i < 10 && (
                  <swiper-slide key={movie.id}>
                     <div id="hero" className={`heroPattern h-[480px] w-full relative`} style={{ backgroundImage: `url('http://image.tmdb.org/t/p/w500${movie.backdrop_path}')` }}>
                        <div className="h-full w-full flex items-center justify-center backdrop-blur ">
                           <div className=" flex flex-col items-center gap-2 z-0">
                              <Image width={150} height={250} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="avengers" className="aspect-[4/6] object-cover rounded md:aspect-[4/5]" />
                              <div className="text-white mx-4 text-center">
                                 <Link href={`/movie/${toSnakeCase(movie.title)}_${movie.id}`} className="text-xl md:text-2xl mb-0.5">
                                    <strong>{movie.title}</strong>
                                 </Link>

                                 <TextOverview overview={movie?.overview} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </swiper-slide>
               )
         )}
      </swiper-container>
   );
};

const TextOverview = ({ overview }) => {
   return (
      <>
         <p className="text-sm block md:hidden">{overview.substr(0, 100)}...</p>
         <p className="text-sm hidden md:block">{overview.substr(0, 200)}</p>
      </>
   );
};

export const SwiperCardWrapper = ({ data }) => {
   const [itemPerSlide, setItemPerSlide] = useState("5");

   useEffect(() => {
      window.innerWidth < 640 ? setItemPerSlide("2") :
         window.innerWidth < 768 ? setItemPerSlide("5") :
            setItemPerSlide("7");
   }, []);

   return (
      <swiper-container slides-per-view={itemPerSlide} grab-cursor="true" className="bg-red-200">
         {data.map(
            (movie, index) =>
               index < 7 && (
                  <swiper-slide key={movie.id}>
                     <CardRecommended 
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date} />
                  </swiper-slide>
               )
         )}
      </swiper-container>
   );
};

export default SwiperCarousel;
