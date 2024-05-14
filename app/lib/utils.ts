export const generatePages = (currentPage: number, totalPages: number) => {
   if (totalPages <= 7) {
      return [1, 2, 3, 4, 5, 6, 7];
   }

   if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
   }

   if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
   }

   return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};