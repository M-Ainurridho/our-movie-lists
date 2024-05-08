import { fetchDetailMovie } from "@/app/lib/api";
import Image from "next/image";

import style from "@/app/home.module.css";
import clsx from "clsx";

const Carousel = async () => {
   const movie = await fetchDetailMovie();

   return (
      <div id="hero" className="h-[450px] w-full relative flex justify-center items-center md:justify-start md:items-end ">
         <div className={clsx(`${style.heroPattern}  absolute top-0 left-0 bottom-0 right-0 -z-10"`)} style={{ backgroundImage: `url('http://image.tmdb.org/t/p/w500${movie.backdrop_path}')` }}></div>

         <div className="carousel-detail flex flex-col items-center gap-1 md:flex-row md:items-start md:mx-20 md:mb-10 z-0">
            <Image width={150} height={250} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="aspect-[4/5] object-cover rounded" />
            <div className="text-white ml-4">
               <h3 className="text-xl md:text-2xl text-center md:text-start mb-0.5">
                  <strong>{movie.title}</strong>
               </h3>
               <p className="text-sm text-center md:text-start">{movie.overview}</p>
            </div>
         </div>
      </div>
   );
};

export default Carousel;

{
   /* <Image width={1024} height={0} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className=" w-full h-full object-cover object-top grayscale-[50%] absolute -z-10" /> */
}
