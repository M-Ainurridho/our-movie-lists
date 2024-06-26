import { PaginationSlide } from "./definitions";

export const generatePages = (currentPage: number, totalPages: number): PaginationSlide => {
   if (totalPages <= 7) {
      let pages: number[] = [];

      for (let i = 1; i <= totalPages; i++) {
         pages.push(i);
      }

      return pages;
   }

   if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
   }

   if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
   }

   return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};

export const toSnakeCase = (text: string, isConvert: boolean = true) => {
   if (isConvert) {
      const newText = text!.toLowerCase().split(" ");
      return newText.join("_");
   } else {
      let newArr = text!.split("_");
      const id = newArr[newArr.length - 1];
      return Number(id);
   }
};

export const generateGenre = (text: string) => {
   let newText: string | string[] = text.split("_");
   newText.pop();

   if (newText.length < 2) {
      return toUpperCase(newText.toString());
   }

   newText = newText.map((text) => toUpperCase(text));
   return newText.join(" ");
};

export const toUpperCase = (text: string) => {
   const firstWord = text[0].toUpperCase();
   const exceptFirst = text.slice(1);
   const newText = firstWord + exceptFirst;
   return newText;
};

export const upperAndSplit = (text: string, separator: string) => {
   let splited = text.split(separator);
   if (splited.length > 2) {
      splited = splited.map((genre, i) => (i !== splited.length - 1 ? toUpperCase(genre) : ""));
      splited.pop();

      return splited.join(" ");
   }

   return toUpperCase(splited[0]);
};
