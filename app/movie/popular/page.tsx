import { fetchPopularMovies } from "@/app/lib/api";
import { merienda } from "@/app/ui/fonts";
import Card from "@/app/ui/card";

import { Movie } from "@/app/lib/definitions";
import Pagination from "@/app/ui/movie/pagination";

const Page = async () => {
   const { data, total_pages } = await fetchPopularMovies();

   return (
      <section id="section-page" className="px-4 py-8 md:p-8 dark:bg-neutral-800 dark:text-white">
         <h1 className="text-xl md:text-2xl">
            Show All <strong>Popular Movies</strong>
         </h1>

         <div className="cards grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-5 justify-between mt-4">
            {data.map((p: Movie) => (
               <Card key={p.id} id={p.id} title={p.title} poster_path={p.poster_path} release_date={p.release_date} />
            ))}
         </div>

         <Pagination pages={total_pages} />
      </section>
   );
};

export default Page;
