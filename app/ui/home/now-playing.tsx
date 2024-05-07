import { fetchNowPlaying } from "@/app/lib/api";
import { Movie } from "@/app/lib/definitions";

import Section from "@/app/ui/home/section";
import Image from "next/image";
import Link from "next/link";


const NowPlaying = async () => {
    const nowPlaying = await fetchNowPlaying();

   return (
      <Section sectionId="nowplaying" category="Now Playing">
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
            {nowPlaying.map(({ id, title, poster_path, release_date }: Movie, idx: number) => {
               release_date = release_date.split("-").reverse().join("-")

               return (
                  idx < 7 && (
                     <div className="movie-card relative" key={id}>
                        <Image width={1000} height={760} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt="avengers-endgame" className="aspect-[4/5] rounded hidden md:flex" />

                        <Image width={500} height={620} src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="aspect-[4/5] object-cover rounded flex md:hidden" />

                        <Link href={`/now-playing/${id}`} className="block text-sm mt-1.5">
                           <p className="truncate">{title}</p>
                           <p className="flex justify-between mt-0.5">
                              <span>Rate: 9/10</span>
                              <span className="text-red-500">{release_date}</span>
                           </p>
                        </Link>
                     </div>
                  )
               );
            })}
         </div>
      </Section>
   );
};

export default NowPlaying;
