import { fetchPopular } from "@/app/lib/api";
import CardWrapper from "@/app/ui/cards";

const Popular = async ({ currentPage }: { currentPage?: number | undefined }) => {
   const { data } = currentPage ? await fetchPopular(currentPage) : await fetchPopular();

   return <CardWrapper data={data} />;
};

export default Popular;
