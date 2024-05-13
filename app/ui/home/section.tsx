import Link from "next/link";
import React from "react";

interface Props {
   children: React.ReactNode;
   sectionId: string;
   category: string;
   path: string;
}

const Recommended = ({ children, sectionId, category, path }: Props) => {
   return (
      <section id={sectionId} className="p-4 bg-neutral-100 dark:text-white dark:bg-neutral-900 md:rounded-md shadow">
         <div className="flex justify-between items-center">
            <strong className="text-lg md:text-xl">{category}</strong>
            <Link href={`/movie/${path}`} className="text-xs text-white bg-blue-600 flex items-center py-1.5 px-3 rounded-full font-medium hover:bg-blue-700 duration-200 cursor-pointer">
               View all
            </Link>
         </div>

         <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-2 mb-2.5" />

         {children}
      </section>
   );
};

export default Recommended;
