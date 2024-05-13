import Image from "next/image";
import Link from "next/link";
import { Movie } from "../lib/definitions";

const Card = ({ id, title, poster_path, release_date }: Movie) => {
   const date = new Date(release_date).getFullYear();

   return (
      <Link href={`/movie/${id}`} className="card">
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

export default Card;
