import { fetchUpcoming } from "@/app/lib/api";
import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";
import Upcoming from "@/app/ui/movie/recommended/upcoming";
import Pagination from "@/app/ui/movie/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Upcoming",
};

const Page = async ({ searchParams }: { searchParams?: { page?: number } }) => {
   const currentPage = Number(searchParams?.page) || 1;
   const { totalPages } = await fetchUpcoming(currentPage);

   return (
      <>
         <section id="section-page" className="px-4 py-8 md:p-8 dark:bg-neutral-800 dark:text-white">
            <h1 className="text-xl md:text-2xl mb-4">
               Show All <strong>Upcoming Movies</strong>
            </h1>

            <Suspense fallback={<CardsSkeleton />}>
               <Upcoming currentPage={currentPage} />
            </Suspense>

            <Pagination totalPages={totalPages} />
         </section>
      </>
   );
};

export default Page;
