import { fetchDetailMovie } from "@/app/lib/api";
import { toSnakeCase } from "@/app/lib/utils";
import Container from "@/app/ui/container";
import { ButtonBack } from "@/app/ui/movie/buttons";
import Table from "@/app/ui/movie/tables";
import Image from "next/image";

const Page = async ({ params }: { params?: { id?: string | undefined } }) => {
   const id = toSnakeCase(params!.id, false);
   const movie = await fetchDetailMovie(id);

   return (
      <Container>
         <div className="flex flex-col md:flex-row gap-5">
            <Image height={0} width={400} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="aspect-[1/1] object-contain w-full md:w-[400px]" />

            <div>
               <Table movie={movie} />
            </div>
         </div>
         <ButtonBack className="mt-2" />
      </Container>
   );
};

export default Page;
