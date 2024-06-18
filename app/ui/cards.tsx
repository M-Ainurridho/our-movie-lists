"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";

const CardWrapper = ({ data }: any) => {
   return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-5 gap-y-7 justify-between">
         {data.map((movie: Movie) => (
            <Card key={movie.id} movie={movie} />
         ))}
      </div>
   );
};

export const Card = ({ movie }: { movie: Movie }) => {
   const { id, title, poster_path, release_date } = movie;
   const date = new Date(release_date).getFullYear();

   return (
      <Link href={`/movie/${toSnakeCase(title)}_${id}`}>
         <div>
            <Image
               src={`http://image.tmdb.org/t/p/w500${poster_path}`}
               width={1000}
               height={760}
               alt={title} 
               priority={true}
               className="aspect-[4/5] rounded hidden md:flex" />

            <Image
               src={`http://image.tmdb.org/t/p/w500${poster_path}`}
               width={500}
               height={620}
               alt={title} 
               priority={true}
               className="aspect-[4/6] object-cover rounded flex md:hidden" />
         </div>
         <div>
            <div className="block text-sm mt-1.5">
               <h5 className="truncate font-semibold">{title}</h5>
               <p className="flex justify-between mt-0.5">
                  <span>Rate: 9/10</span>
                  <span>{date}</span>
               </p>
            </div>
         </div>
      </Link>
   );
};

export const CardRecommended = ({ movie }: { movie: Movie }) => {
   const { id, title, poster_path, release_date } = movie;
   const date = new Date(release_date).getFullYear();

   return (
      <Link href={`/movie/${toSnakeCase(title)}_${id}`} className="block ms-2 me-2">
         <div>
            <Image width={1024} height={100} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="aspect-[4/5] rounded me-2" />
         </div>
         <div>
            <div className="block text-sm mt-1.5">
               <h5 className="truncate font-semibold">{title}</h5>
               <p className="flex justify-between mt-0.5">
                  <span>Rate: 9/10</span>
                  <span>{date}</span>
               </p>
            </div>
         </div>
      </Link>
   );
};

export default CardWrapper;
