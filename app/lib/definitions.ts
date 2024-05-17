export type NumberOrUndefined = number | undefined;
export type StringOrUndefined = string | undefined;

export interface Genre {
   id: number;
   name: string;
}

export interface Movie {
   id: number | string;
   title: string;
   poster_path: string;
   release_date: string | number | Date;
}
