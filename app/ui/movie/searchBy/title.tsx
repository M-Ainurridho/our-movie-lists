import { fetchSearchMovies } from "@/app/lib/api";
import CardWrapper from "../../cards";

const SearchByTitle = async ({ 
    query,
    currentPage
}: {
    query: string,
    currentPage: number
}) => {
   const { data } = await fetchSearchMovies(query, currentPage);

   return <CardWrapper data={data} />;
};

export default SearchByTitle;
