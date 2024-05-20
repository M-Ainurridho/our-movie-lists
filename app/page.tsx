import { Suspense } from "react";
import { CarouselSkeleton, RecommendedSkeleton } from "@/app/ui/skeletons";
import Carousel from "@/app/ui/home/carousel";
import Main from "@/app/ui/main";

// import { ScrollToTop } from "./ui/buttons";

import Recommended from "@/app/ui/home/recommended";
import Popular from "@/app/ui/movie/recommended/popular";
import NowPlaying from "@/app/ui/movie/recommended/now-playing";
import Upcoming from "@/app/ui/movie/recommended/upcoming";
import "@/app/ui/home/home.css"

export default async function Page() {
   return (
      <>
         <Suspense fallback={<CarouselSkeleton />}>
            <Carousel />
         </Suspense>

         <Main>
            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended title="Popular Movies" path="/popular">
                  <Popular />
               </Recommended>
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended title="Now Playing" path="/now-playing">
                  <NowPlaying />
               </Recommended>
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended title="Upcoming" path="/upcoming">
                  <Upcoming />
               </Recommended>
            </Suspense>
         </Main>

         {/* <ScrollToTop /> */}
      </>
   );
}
