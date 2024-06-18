import { Fragment, Suspense } from "react";
import { CarouselSkeleton, RecommendedSkeleton } from "@/app/ui/skeletons";
import Carousel from "@/app/ui/home/carousel";
import Main from "@/app/ui/semantics";

// import { ScrollToTop } from "./ui/buttons";

import Recommended from "@/app/ui/home/recommended";
import Popular from "@/app/ui/movie/recommended/popular";
import NowPlaying from "@/app/ui/movie/recommended/now-playing";
import Upcoming from "@/app/ui/movie/recommended/upcoming";
import { Metadata } from "next";
import "@/app/ui/home/home.css";

export const metadata: Metadata = {
   title: "Home | MAR Movie",
};

export default async function HomePage() {
   return (
      <Fragment>
         <Suspense fallback={<CarouselSkeleton />}>
            <Carousel />
         </Suspense>

         <Main>
            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended 
                  id="popular-section" 
                  title="Popular Movies" 
                  path="/popular"
               >
                  <Popular />
               </Recommended>
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended 
                  id="nowplaying-section" 
                  title="Now Playing" 
                  path="/now-playing"
               >
                  <NowPlaying />
               </Recommended>
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <Recommended 
                  id="upcoming-section" 
                  title="Upcoming" 
                  path="/upcoming"
               >
                  <Upcoming />
               </Recommended>
            </Suspense>
         </Main>

         {/* <ScrollToTop /> */}
      </Fragment>
   );
}
