import { fetchMovieGenres } from "@/app/lib/api";
import GenreList from "@/app/ui/movie/genre-list";

const Page = async () => {
   const genres = await fetchMovieGenres();

   return <GenreList genres={genres} />;
};

export default Page;
