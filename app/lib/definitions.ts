export type Movie = {
   id: number;
   title: string;
   poster_path: string;
   release_date: string;
};

export type Genre = {
   id: number | string;
   name: string;
};

export type Genres = Genre[];
