"use client";

import React, { createContext, useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";

export const ThemeContext = createContext<any>(false);

const DarkTheme = ({ children }: { children: React.ReactNode }) => {
   let [isDark, setIsDark] = useState<any>(false);

   return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};


export const ToggleDark = () => {
   let { isDark, setIsDark } = useContext(ThemeContext);

   const handleModeChange = () => {
      const html = document.querySelector("html");

      if (isDark) {
         html?.classList.remove("dark");
         localStorage.setItem("theme", "light");
      } else {
         html?.classList.add("dark");
         localStorage.setItem("theme", "dark");
      }

      setIsDark(!isDark);
   };

   return (
      <div className="border border-neutral-500 rounded-full cursor-pointer p-1.5 dark:border-white" onClick={handleModeChange}>
         {isDark ? <MoonIcon className="h-5" /> : <SunIcon className="h-5" />}
      </div>
   );
};

export default DarkTheme;
