export type NumberOrUndefined = number | undefined;
export type StringOrUndefined = string | undefined;
export type StringOrNumber = string | number

export interface Genre {
   id: number;
   name: string;
}

export interface Movie {
   id: StringOrNumber;
   title: string;
   poster_path: string;
   release_date: StringOrNumber | Date;
}

export type PaginationSlide =
   number[] |
   [number, number, number, string, number, number] |
   [number, number, string, number, number, number] |
   [number, string, number, number, number, string, number]

