import { fetchPopular } from "@/app/lib/api";
import CardWrapper from "@/app/ui/cards";
import { SwiperCardWrapper } from "../../home/swiper";

const Popular = async ({ currentPage }: { currentPage?: number | undefined }) => {
   const { data } = currentPage ? await fetchPopular(currentPage) : await fetchPopular();

   return currentPage ? <CardWrapper data={data}/> : <SwiperCardWrapper data={data}/>
};

export default Popular;
