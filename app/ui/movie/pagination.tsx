"use client";

import clsx from "clsx";
import { merienda } from "@/app/ui/fonts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePages } from "@/app/lib/utils";
import { PaginationSlide, StringOrNumber } from "@/app/lib/definitions";

const Pagination = ({ totalPages }: { totalPages: number }) => {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const currentPage = Number(searchParams.get("page")) || 1;

   const allPages: PaginationSlide = generatePages(currentPage, totalPages);

   const createPageURL = (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", pageNumber.toString());
      return `${pathname}?${params.toString()}`;
   };

   return (
      <div className="pagination flex justify-center items-center gap-x-2 mt-8">
         <Link href={createPageURL(currentPage - 1)}>
            <ChevronLeftIcon className={clsx({ "h-8 mx-1 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-200": currentPage > 1 })} />
         </Link>

         {allPages.map((val: StringOrNumber, idx: number) => (
            <Link
               href={createPageURL(val)}
               key={idx}
               className={clsx(
                  { "px-1 font-bold flex items-center justify-center text-base hover:text-blue-700 duration-100": typeof val !== "string" },
                  { "text-blue-700": currentPage === val },
                  { "cursor-default": typeof val === "string" },
                  merienda.className
               )}
            >
               {val}
            </Link>
         ))}

         <Link href={createPageURL(currentPage + 1)}>
            <ChevronRightIcon className="h-8 mx-1 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-200" />
         </Link>
      </div>
   );
};

export default Pagination;
