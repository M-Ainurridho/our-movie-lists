import { fetchMoviesByGenre } from "@/app/lib/api";
import { generateGenre, toSnakeCase } from "@/app/lib/utils";
import CardWrapper from "@/app/ui/cards";
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

         <CardWrapper data={data} />

         <Pagination totalPages={totalPages} />
      </div>
   );
};

export default Page;
