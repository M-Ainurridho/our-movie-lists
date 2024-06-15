import { fetchNowPlaying } from "@/app/lib/api";
import { SwiperCardWrapper } from "../../home/swiper";
import CardWrapper from "../../cards";

const NowPlaying = async ({ currentPage }: { currentPage?: number }) => {
   const { data } = currentPage ? await fetchNowPlaying(currentPage) : await fetchNowPlaying();

   return currentPage ? <CardWrapper data={data} /> : <SwiperCardWrapper data={data} />;
};

export default NowPlaying;
