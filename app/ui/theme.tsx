"use client";

import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>(false);

const DarkTheme = ({ children }: { children: React.ReactNode }) => {
   let [isDark, setIsDark] = useState<any>(false);

   return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

export default DarkTheme;
