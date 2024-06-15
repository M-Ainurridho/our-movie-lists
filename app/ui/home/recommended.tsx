import Link from "next/link";
import React from "react";

interface Props {
   children: React.ReactNode;
   title: string;
   path: string;
}

const Recommended = ({ children, title, path }: Props) => {
   return (
      <section className="p-4 bg-neutral-100 dark:text-white dark:bg-neutral-900 md:rounded-md shadow w-full overflow-hidden">
         <div className="flex justify-between items-center">
            <strong className="text-lg md:text-xl">{title}</strong>
            <Link href={`/movie${path}`} className="text-xs text-white bg-blue-600 flex items-center py-1.5 px-3 rounded-full font-medium hover:bg-blue-700 duration-200 cursor-pointer">
               View all
            </Link>
         </div>

         <div className="h-[1px] bg-neutral-300 dark:bg-neutral-500 mt-2 mb-2.5" />
         {children}
      </section>
   );
};

export default Recommended;
