import { fetchPopular } from "@/app/lib/api";

import { Suspense } from "react";

import { CardsSkeleton, MovieRecommendedSkeleton } from "@/app/ui/skeletons";
import Popular from "@/app/ui/movie/recommended/popular";
import Pagination from "@/app/ui/movie/pagination";

const Page = async ({ searchParams }: { searchParams?: { page?: number } }) => {
   const currentPage = Number(searchParams?.page) || 1;
   const { totalPages } = await fetchPopular(currentPage);

   return (
      <section id="section-page" className="px-4 py-8 md:p-8 dark:bg-neutral-900 dark:text-white">
         <h1 className="text-xl md:text-2xl mb-4">
            Show All <strong>Popular Movies</strong>
         </h1>

         <Suspense fallback={<CardsSkeleton />}>
            <Popular currentPage={currentPage} />
         </Suspense>

         <Pagination totalPages={totalPages} />
      </section>
   );
};

export default Page;
