import clsx from "clsx";
import { ReactNode } from "react";

const Main = ({ children, className }: { children: ReactNode; className?: string }) => {
   return (
      <main id="container" className={clsx("min-h-[88vh] px-0 py-8 md:p-8 dark:bg-neutral-800 dark:text-white", className)}>
         {children}
      </main>
   );
};

export default Main;
