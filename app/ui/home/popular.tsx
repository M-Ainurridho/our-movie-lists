import { fetchPopularMovies } from "@/app/lib/api";
import { Movie } from "@/app/lib/definitions";

import Recommended from "@/app/ui/home/section";
import Card from "../card";
import { CardSkeleton } from "../skeletons";

const PopularMovies = async () => {
   const { data } = await fetchPopularMovies();

   return (
      <Recommended sectionId="popular" category="Popular Movies" path="popular">
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
            {data.map((p: Movie, idx: number) => {
               return idx < 7 && <Card key={p.id} id={p.id} title={p.title} poster_path={p.poster_path} release_date={p.release_date} />;
            })}
         </div>
      </Recommended>
   );
};

export default PopularMovies;
