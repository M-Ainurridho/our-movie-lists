"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

const CardWrapper = ({ data }: any) => {
   const pathname = usePathname();

   return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-5 gap-y-7 justify-between">
         {data.map((movie: Movie, index: number) => {
            return pathname !== "/" ? (
               <Card key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
            ) : (
               index < 7 && <Card key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />
            );
         })}
      </div>
   );
};

export const Card = ({ id, title, poster_path, release_date }: Movie) => {
   const date = new Date(release_date).getFullYear();

   return (
      <Link href={`/movie/${toSnakeCase(title)}_${id}`} className="card">
         <div className="card-header">
            <Image width={1000} height={760} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="aspect-[4/5] rounded hidden md:flex" />

            <Image width={500} height={620} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="aspect-[4/6] object-cover rounded flex md:hidden" />
         </div>
         <div className="card-body">
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

export const CardRecommended = ({ id, title, poster_path, release_date }: Movie) => {
   const date = new Date(release_date).getFullYear();

   return (
      <Link href={`/movie/${toSnakeCase(title)}_${id}`} className="card block ms-2 me-2">
         <div className="card-header">
            <Image width={1024} height={100} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="aspect-[4/5] rounded me-2" />
         </div>
         <div className="card-body">
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
