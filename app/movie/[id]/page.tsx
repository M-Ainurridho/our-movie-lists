import { fetchDetailMovie, fetchMovieTrailer } from "@/app/lib/api";
import { Trailer } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";
import Container from "@/app/ui/container";
import { ButtonBack } from "@/app/ui/movie/buttons";
import TableWrapper from "@/app/ui/movie/tables";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
   const id = toSnakeCase(params?.id, false);
   const movie = await fetchDetailMovie(id);
   const trailer = await fetchMovieTrailer(id);

   return (
      <Container>
         <div>
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
               <Image height={0} width={350} priority={true} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="aspect-[4/6] object-contain w-full mx-auto md:w-[350px] rounded-md" />

               <MovieTrailer trailer={trailer} />
            </div>

            <TableWrapper movie={movie} />
         </div>
         <ButtonBack className="mt-4" />
      </Container>
   );
};

const MovieTrailer = ({ trailer }: { trailer: Trailer }) => {
   const key = trailer.key;
   return <iframe src={`https://www.youtube.com/embed/${key}`} loading="lazy" className="w-full aspect-[16/9]"></iframe>;
};

export default Page;
