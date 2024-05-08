import DarkTheme from "@/app/ui/theme";
import Navbar from "@/app/ui/navbar";

import Main from "@/app/ui/main";
import PopularMovies from "@/app/ui/home/popular";
import NowPlaying from "./ui/home/now-playing";
import { ScrollToTop } from "./ui/buttons";
import Upcoming from "./ui/home/upcoming";
import Carousel from "./ui/home/carousel";

// import "./home.module.css"

export default function Page() {
   return (
      <DarkTheme>
         <Navbar />

         <Carousel />

         <Main>
            <PopularMovies />
            <NowPlaying />
            <Upcoming />
         </Main>

         {/* <ScrollToTop /> */}
      </DarkTheme>
   );
}
