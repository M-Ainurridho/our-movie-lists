"use client";

import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const ButtonBack = ({ className }: { className?: string }) => {
   const router = useRouter();

   return (
      <button className={clsx("flex items-center mx-auto text-blue-700 text-sm md:text-base hover:text-hover-500", className)} onClick={() => router.back()}>
         <ChevronDoubleLeftIcon className="w-4 mr-1" /> Back
      </button>
   );
};
