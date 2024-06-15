import { fetchUpcoming } from "@/app/lib/api";
import { SwiperCardWrapper } from "../../home/swiper";
import CardWrapper from "../../cards";

const Upcoming = async ({ currentPage }: { currentPage?: number | undefined }) => {
   const { data } = currentPage ? await fetchUpcoming(currentPage) : await fetchUpcoming();

    return currentPage ? <CardWrapper data={data}/> : <SwiperCardWrapper data={data}/>

};

export default Upcoming;
