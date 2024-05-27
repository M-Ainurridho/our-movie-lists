import { Suspense } from "react";
import { fetchSearchMovies } from "../lib/api";
import { MovieRecommendedSkeleton } from "../ui/skeletons";
import SearchByTitle from "../ui/movie/searchBy/title";
import Pagination from "../ui/movie/pagination";
import Container from "../ui/container";

const Page = async ({
   searchParams,
}: {
   searchParams?: {
      query?: string;
      page?: string;
   };
}) => {
   const query = searchParams?.query || "";
   const currentPage = Number(searchParams?.page) || 1;
   const { data, totalPages } = await fetchSearchMovies(query, currentPage);

   return (
      <Container>
         <h2 className="text-2xl mb-4">
            Searched Movies <strong>{query}</strong>
         </h2>
         {data.length > 0 || !query ? (
            <>
               <Suspense fallback={<MovieRecommendedSkeleton />}>
                  <SearchByTitle query={query} currentPage={currentPage} />
               </Suspense>

               <Pagination totalPages={totalPages} />
            </>
         ) : (
            <div className="text-center mt-4">
               <span className="p-3 text-white bg-red-500 shadow shadow-lg shadow-red-400 text-lg font-bold rounded-md">Movie Not Found</span>
            </div>
         )}
      </Container>
   );
};

export default Page;
