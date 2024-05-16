import { fetchMoviesByGenre } from "@/app/lib/api";
import { Movie } from "@/app/lib/definitions";
import { generateGenre, toSnakeCase } from "@/app/lib/utils";
import Card from "@/app/ui/card";
import Pagination from "@/app/ui/movie/pagination";

const Page = async ({
   params,
   searchParams,
}: {
   params: { id: string };
   searchParams?: {
      page?: number;
   };
}) => {
   const id = toSnakeCase(params?.id, false);
   const currentPage = Number(searchParams?.page) || 1;

   const { data, totalPages } = await fetchMoviesByGenre(id, currentPage);

   return (
      <div id="section-page" className="px-4 py-8 md:p-8 dark:bg-neutral-900 dark:text-white">
         <h1 className="text-xl md:text-2xl">
            Show All <strong>{generateGenre(params?.id)} Genre</strong>
         </h1>

         <div className="cards grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-5 justify-between mt-4">
            {data.map((p: Movie) => (
               <Card key={p.id} id={p.id} title={p.title} poster_path={p.poster_path} release_date={p.release_date} />
            ))}
         </div>

         <Pagination totalPages={totalPages} />
      </div>
   );
};

export default Page;
