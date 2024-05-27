import Image from "next/image";
import Link from "next/link";
import { toSnakeCase } from "@/app/lib/utils";

const SwiperCarousel = ({ movies }) => {
   return (
      <swiper-container
         loop="true"
         speed="1000"
         grab-cursor="true"
         pagination="true"
         pagination-clickable="true"
         autoplay>
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
         <p className="text-sm hidden md:block">{overview}</p>
      </>
   );
};

export default SwiperCarousel;
