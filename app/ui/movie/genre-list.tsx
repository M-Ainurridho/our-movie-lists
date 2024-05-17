import { Genre } from "@/app/lib/definitions";
import Container from "../container";
import Link from "next/link";
import { toSnakeCase } from "@/app/lib/utils";
import { HashtagIcon } from "@heroicons/react/24/outline";

const GenreList = ({ genres }: { genres: Genre[] }) => {
   return (
      <Container>
         <div className="grid grid-cols-6 gap-6 p-2 mx-32 mt-10">
            {genres.map((genre: Genre) => (
               <p key={genre.id} className="flex items-center">
                  <HashtagIcon className="w-4" />
                  <Link href={`/movie/genre/${toSnakeCase(genre.name)}_${genre.id}`} className="p-2 hover:bg-blue-500 hover:text-white rounded-md duration-100">
                     {genre.name}
                  </Link>
               </p>
            ))}
         </div>
      </Container>
   );
};

export default GenreList;
