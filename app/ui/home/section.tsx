import React from "react";

interface Props {
   children: React.ReactNode;
   sectionId: string;
   category: string;
}

const Section = ({ children, sectionId, category }: Props) => {
   return (
      <section id={sectionId} className="p-4 bg-neutral-100 dark:text-white dark:bg-neutral-900 rounded-md shadow">
         <div className="flex justify-between items-center">
            <strong className="text-lg md:text-xl">{category}</strong>
            <button className="text-xs text-white bg-blue-600 flex items-center py-1.5 px-3 rounded-full font-medium hover:bg-blue-700 duration-200 cursor-pointer">View all</button>
         </div>

         <div className="w-full h-[1px] bg-neutral-300 dark:bg-white mt-2 mb-2.5" />

         {children}
      </section>
   );
};

export default Section;
