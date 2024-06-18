import { fetchMoviesByGenre } from "@/app/lib/api";
import { generateGenre, toSnakeCase, toUpperCase, upperAndSplit } from "@/app/lib/utils";

import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";
import Pagination from "@/app/ui/movie/pagination";
import SearchByGenre from "@/app/ui/movie/searchBy/genre";

type Props = {
   params: { id: string };
   searchParams?: {
      page?: string;
   };
};

export function generateMetadata({ params, searchParams }: Props) {
   const genre = upperAndSplit(params.id, "_");
   return {
      title: genre,
   };
}

const Page = async ({ params, searchParams }: Props) => {
   const id = toSnakeCase(params.id, false);
   const currentPage = Number(searchParams?.page) || 1;

   const { totalPages } = await fetchMoviesByGenre(id, currentPage);

   return (
      <div id="section-page" className="px-4 py-8 md:p-8 dark:bg-neutral-900 dark:text-white">
         <h1 className="text-xl md:text-2xl mb-4">
            Show All <strong>{generateGenre(params?.id)} Genre</strong>
         </h1>

         <Suspense key={Number(id) + currentPage} fallback={<CardsSkeleton />}>
            <SearchByGenre id={id} currentPage={currentPage} />
         </Suspense>

         <Pagination totalPages={totalPages} />
      </div>
   );
};

export default Page;
