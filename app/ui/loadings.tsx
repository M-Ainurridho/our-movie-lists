export const LoadingCircle = () => {
   return (
      <div className=" h-[88vh] w-full flex items-center justify-center dark:bg-neutral-800">
         <div className="w-20 h-20 relative">
            <div className="w-20 h-20 border border-8 border-neutral-200 rounded-full"></div>
            <div className="w-20 h-20 border border-8 border-transparent border-t-neutral-600 dark:border-t-neutral-400 rounded-full absolute top-0 left-0 animate-spin"></div>
         </div>
      </div>
   );
};
