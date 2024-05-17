import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
   return (
      <div id="container" className="min-h-[88vh] px-4 py-8 md:p-8 dark:bg-neutral-800 dark:text-white">
         {children}
      </div>
   );
};

export default Container;
