import { fetchNowPlaying } from "@/app/lib/api";
import { Movie } from "@/app/lib/definitions";

import Recommended from "@/app/ui/home/section";
import Card from "../card";

const NowPlaying = async () => {
   const nowPlaying = await fetchNowPlaying();

   return (
      <Recommended sectionId="nowplaying" category="Now Playing" path="now-playing">
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
            {nowPlaying.map((n: Movie, idx: number) => {
               return idx < 7 && <Card key={n.id} id={n.id} title={n.title} poster_path={n.poster_path} release_date={n.release_date} />;
            })}
         </div>
      </Recommended>
   );
};

export default NowPlaying;
