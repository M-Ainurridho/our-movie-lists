import { fetchMoviesByGenre } from "@/app/lib/api";
import CardWrapper from "@/app/ui/cards";

const Genres = async ({ id, currentPage }: { id: string | number; currentPage: number }) => {
   const { data } = await fetchMoviesByGenre(id, currentPage);

   return <CardWrapper data={data} />;
};

export default Genres;
