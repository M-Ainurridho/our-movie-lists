import axios from "axios";
import { getOption } from "./options";
import { unstable_noStore } from "next/cache";

export const fetchPopularMovies = async (page: number = 1) => {
   unstable_noStore();

   try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, getOption);
      return {
         data: response?.data.results,
         totalPages: response?.data.total_pages,
      };
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};

export const fetchNowPlaying = async (page: number = 1) => {
   unstable_noStore();

   try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, getOption);
      return {
         data: response.data?.results,
         totalPages: response?.data.total_pages,
      };
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get now playing data");
   }
};


export const fetchUpcoming = async (page: number = 1) => {
   unstable_noStore();

   try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, getOption);
      return {
         data: response?.data.results,
         totalPages: response?.data.total_pages,
      };
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

export const fetchDetailMovie = async (id: string | number) => {
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

export const fetchMoviesByGenre = async (params: string | number, page: number) => {
   unstable_noStore();

   try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${params}&language=en-US&page=${page}`, getOption);

      console.log(response.data)
      return {
         data: response.data?.results,
         totalPages: response.data?.total_pages,
      };
   } catch (err) {
      console.log(err);
      throw new Error("Failed to get popular data");
   }
};

// export const fetchFilteredMoviesbyGenre = (params: string) {}
