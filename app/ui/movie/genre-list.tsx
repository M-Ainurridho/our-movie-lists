import { Genre } from "@/app/lib/definitions";
import Container from "../container";
import Link from "next/link";
import { toSnakeCase } from "@/app/lib/utils";

const GenreList = ({
    genres
}: {
    genres: Genre[]
}) => {
   return (
      <Container>
         <ul>
            {genres.map((genre: Genre) => (
               <li key={genre.id}>
                  <Link href={`/movie/genre/${toSnakeCase(genre.name)}_${genre.id}`} className="hover:text-blue-500">{genre.name}</Link>
               </li>
            ))}
         </ul>
      </Container>
   );
};

export default GenreList;
