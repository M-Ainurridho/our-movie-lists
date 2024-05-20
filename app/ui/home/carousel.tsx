import { fetchTopRated } from "@/app/lib/api";
import DetailMovie from "@/app/ui/home/detail";

import "@/app/ui/home/home.css";
import SwiperCarousel from "./swiper";

const Carousel = async () => {
   const movies = await fetchTopRated();

   return <SwiperCarousel movies={movies} />;
};

export default Carousel;
