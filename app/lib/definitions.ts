export type Genre = {
   id: number;
   name: string;
};

export type Movie = {
   id: number | string;
   title: string;
   poster_path: string;
   release_date: string | number | Date;
};
