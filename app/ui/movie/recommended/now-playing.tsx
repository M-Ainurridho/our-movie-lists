import { fetchNowPlaying } from "@/app/lib/api";
import CardWrapper from "@/app/ui/cards";

const NowPlaying = async ({ currentPage }: { currentPage?: number | undefined }) => {
   const { data } = currentPage ? await fetchNowPlaying(currentPage) : await fetchNowPlaying();

   return <CardWrapper data={data} />;
};

export default NowPlaying;
