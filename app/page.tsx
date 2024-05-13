import Main from "@/app/ui/main";
import PopularMovies from "@/app/ui/home/popular";
import NowPlaying from "./ui/home/now-playing";
// import { ScrollToTop } from "./ui/buttons";
import Upcoming from "./ui/home/upcoming";
import Carousel from "./ui/home/carousel";
import { CarouselSkeleton, RecommendedSkeleton } from "./ui/skeletons";
import { Suspense } from "react";
// import { fetchMovieGenres } from "./lib/api";

// import "./home.module.css"

export default async function Page() {
   // const genres = await fetchMovieGenres();

   return (
      <>
         <Suspense fallback={<CarouselSkeleton />}>
            <Carousel />
         </Suspense>

         <Main>
            <Suspense fallback={<RecommendedSkeleton />}>
               <PopularMovies />
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <NowPlaying />
            </Suspense>

            <Suspense fallback={<RecommendedSkeleton />}>
               <Upcoming />
            </Suspense>
         </Main>

         {/* <ScrollToTop /> */}
      </>
   );
}
