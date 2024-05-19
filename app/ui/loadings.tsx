export const LoadingCircle = () => {
   return (
      <div className=" h-[80vh] w-full flex items-center justify-center">
         <div className="w-20 h-20 relative">
            <div className="w-20 h-20 border border-8 border-neutral-200 rounded-full"></div>
            <div className="w-20 h-20 border border-8 border-transparent border-t-neutral-600 rounded-full absolute top-0 left-0 animate-spin"></div>
         </div>
      </div>
   );
};
