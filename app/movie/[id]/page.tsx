import { fetchDetailMovie } from "@/app/lib/api";

const Page = async ({ params }: { params: { id: number } }) => {
   const id = params.id;
   const detail = await fetchDetailMovie(id);

   // console.log(detail);

   return <p>Movie id</p>;
};

export default Page;
