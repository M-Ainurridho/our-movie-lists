import {  fetchTopRated } from "@/app/lib/api";
import DetailMovie from "@/app/ui/home/detail";

const Carousel = async () => {
   const movies = await fetchTopRated();

   return <DetailMovie movies={movies} />;
};

export default Carousel;
