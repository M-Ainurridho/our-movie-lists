import { fetchUpcoming } from "@/app/lib/api";
import CardWrapper from "@/app/ui/cards";

const Upcoming = async ({ currentPage }: { currentPage?: number | undefined }) => {
   const { data } = currentPage ? await fetchUpcoming(currentPage) : await fetchUpcoming();

   return <CardWrapper data={data} />;
};

export default Upcoming;
