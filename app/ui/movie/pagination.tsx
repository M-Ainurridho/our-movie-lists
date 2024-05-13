"use client";

import clsx from "clsx";
import { merienda } from "@/app/ui/fonts";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = ({ pages }: { pages: number }) => {
   let [count, setCount] = useState(1);

   const loopNumber = (values: number) => {
      let numbers: any[] = [];

      for (let i = 1; i <= values; i++) {
         if (i === 10) {
            numbers = [...numbers, i];
            break;
         }

         if (i > 5) {
            if (numbers.includes("...")) continue;
            numbers = [...numbers, "..."];
         } else {
            numbers = [...numbers, i];
         }
      }

      return numbers;
   };
   return (
      <div className="pagination flex justify-center items-center gap-x-2 mt-8">
         {count > 1 && <ChevronLeftIcon className="h-8 mx-1 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-200" onClick={() => setCount(--count)} />}

         {loopNumber(pages).map((val) => (
            <button
               key={val}
               className={clsx(
                  { "text-sm font-bold w-7 h-7 rounded-full text-white bg-neutral-900 flex items-center justify-center md:text-base md:w-8 md:h-8": typeof val !== "string" },
                  { "bg-blue-500 ": count === val, "hover:bg-blue-500 duration-100": count !== val },
                  merienda.className
               )}
               disabled={typeof val === "string" && true}
               onClick={() => setCount(val)}
            >
               {val}
            </button>
         ))}

         {count < 10 && <ChevronRightIcon className="h-8 mx-1 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white duration-200" onClick={() => setCount(++count)} />}
      </div>
   );
};

export default Pagination;
