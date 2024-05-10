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
      throw new Error("Failed to get now playing data");
   }
};

export const fetchUpcoming = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", getOption);
      return response.data?.results;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get upcoming data");
   }
};

export const fetchTopRated = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", getOption);
      return response.data?.results;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get top rated data");
   }
};

export const fetchDetailMovie = async (id: number) => {
   unstable_noStore();

   try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, getOption);
      return response.data;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};

export const fetchMovieGenres = async () => {
   unstable_noStore();

   try {
      const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en", getOption);
      return response.data.genres;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};
