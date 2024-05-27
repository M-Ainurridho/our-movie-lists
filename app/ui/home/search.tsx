"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
   const [search, setSearch] = useState<string>("");
   const { push } = useRouter();

   function handleSearch(e: any) {
      if (e.keyCode === 13 && search.length >= 3) {
         push(`/movie?query=${search}`);
         console.log(search);
      }
   }

   return (
      <input
         type="input"
         placeholder="Search movie title"
         className="w-full border py-1.5 md:py-1 px-4 rounded-full text-sm md:text-base placeholder:text-sm dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:placeholder:text-white"
         value={search}
         onChange={(e: any) => setSearch(e.target.value)}
         onKeyUp={handleSearch}
      />
   );
};

export default Search;
