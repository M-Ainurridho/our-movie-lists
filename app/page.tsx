import DarkTheme from "./ui/theme";
import Navbar from "./ui/navbar";
import PopularMovies from "./ui/popular-movie/popular";
import Main from "./ui/main";

export default function Page() {
   return (
      <DarkTheme>
         <Navbar />

         <Main>
            <PopularMovies />
         </Main>
      </DarkTheme>
   );
}
