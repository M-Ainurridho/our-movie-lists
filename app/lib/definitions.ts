export type Genre = {
   id: number | string;
   name: string;
};

export type Genres = Genre[];

export type Movie = {
   id: number | string;
   title: string;
   poster_path: string;
   release_date: string | number | Date;
};
