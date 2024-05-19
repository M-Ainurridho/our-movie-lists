import { HashtagIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export const CarouselSkeleton = () => {
   return (
      <div className="h-[480px] w-full bg-neutral-100 dark:bg-neutral-900">
         <div className="w-full h-full flex justify-center items-center">
            <div className="w-full flex flex-col items-center gap-2">
               <div className="h-[200px] w-[150px] bg-neutral-200 dark:bg-neutral-800 rounded-sm"></div>
               <div className="w-full text-center px-4">
                  <h3 className="mb-2 h-4 w-60 bg-neutral-200 dark:bg-neutral-800 mx-auto rounded-sm"></h3>
                  <p className="h-4 w-full md:w-1/2 bg-neutral-200 dark:bg-neutral-800 mx-auto rounded-sm"></p>
               </div>
            </div>
         </div>
      </div>
   );
};

export const RecommendedSkeleton = () => {
   return (
      <div className="p-4 bg-neutral-100 dark:text-white dark:bg-neutral-900 md:rounded-md shadow">
         <div className="flex items-center justify-between">
            <h2 className="h-5 w-44 bg-neutral-200 rounded-sm dark:bg-neutral-800"></h2>
            <p className="h-7 w-16 rounded-full bg-neutral-200 dark:bg-neutral-800 dark:bg-neutral-800"></p>
         </div>

         <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-800 mt-2 mb-2.5" />

         <CardsSkeleton />
      </div>
   );
};

const ContainerSkeleton = ({ children }: { children: ReactNode }) => {
   return <div className="px-4 py-8 md:p-8 dark:bg-neutral-800 dark:text-white md:min-h-[88vh]">{children}</div>;
};

export const MovieRecommendedSkeleton = () => {
   return (
      <ContainerSkeleton>
         <h1 className="h-6 w-60 bg-neutral-200 dark:bg-black/25 rounded-sm mb-4"></h1>
         <CardsSkeleton />
      </ContainerSkeleton>
   );
};

export const GenreListSkeleton = () => {
   return (
      <ContainerSkeleton>
         <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 p-2 lg:mx-32 md:mt-10">
            {[...Array(20)].map((_: any, index: number) => (
               <p key={index} className="flex items-center">
                  <HashtagIcon className="w-4 mr-1" />
                  <span className="h-4 md:h-6 w-full bg-neutral-200 rounded-sm dark:bg-black/25"></span>
               </p>
            ))}
         </div>
      </ContainerSkeleton>
   );
};

export const CardsSkeleton = () => {
   return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-between">
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
      </div>
   );
};

export const CardSkeleton = () => {
   return (
      <div>
         <div className="h-[250px] md:h-[210px] w-full bg-neutral-200 dark:bg-black/25 rounded-sm"></div>
         <div className="mt-2">
            <h5 className="h-3 w-full bg-neutral-200 rounded-sm dark:bg-black/25"></h5>
            <p className="flex justify-between mt-2.5">
               <span className="h-3 w-16 bg-neutral-200 rounded-sm dark:bg-black/25"></span>
               <span className="h-3 w-8 bg-neutral-200 rounded-sm dark:bg-black/25"></span>
            </p>
         </div>
      </div>
   );
};
