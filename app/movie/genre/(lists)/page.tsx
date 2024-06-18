import { fetchMovieGenres } from "@/app/lib/api";
import { Genre } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";

import Container from "@/app/ui/container";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Genre List",
};

const Page = async () => {
   const genres = await fetchMovieGenres();

   return (
      <Container>
         <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 p-2 lg:mx-32 md:mt-10">
            {genres.map((genre: Genre) => (
               <p key={genre.id} className="flex items-center text-sm md:text-base">
                  <HashtagIcon className="w-3 md:w-4 mr-1" />
                  <Link href={`/movie/genre/${toSnakeCase(genre.name)}_${genre.id}`} className="p-2 hover:bg-blue-500 hover:text-white rounded-md duration-100">
                     {genre.name}
                  </Link>
               </p>
            ))}
         </div>
      </Container>
   );
};

export default Page;
