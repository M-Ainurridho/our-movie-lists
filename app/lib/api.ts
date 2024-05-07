import axios from "axios";
import { getOption } from "./options";
import { unstable_noStore } from "next/cache";

export const fetchPopularMovies = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", getOption);
      return response.data?.results;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};

export const fetchNowPlaying = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", getOption);
      return response.data?.results;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};

export const fetchUpcoming = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", getOption);
      return response.data?.results;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};
