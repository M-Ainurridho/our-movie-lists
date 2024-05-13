import { fetchUpcoming } from "@/app/lib/api";
import { Movie } from "@/app/lib/definitions";

import Recommended from "@/app/ui/home/section";
import Card from "../card";

const Upcoming = async () => {
   const upcoming = await fetchUpcoming();

   return (
      <Recommended sectionId="upcoming" category="Upcoming" path="upcoming">
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
            {upcoming.map((c: Movie, idx: number) => {
               return idx < 7 && <Card key={c.id} id={c.id} title={c.title} poster_path={c.poster_path} release_date={c.release_date} />;
            })}
         </div>
      </Recommended>
   );
};

export default Upcoming;
