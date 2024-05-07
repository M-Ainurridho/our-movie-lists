import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const ScrollToTop = () => {
   return (
      <Link href="#" className="fixed bottom-8 right-8">
         <ArrowUpCircleIcon className="h-14 text-neutral-800 dark:text-white " />
      </Link>
   );
};
