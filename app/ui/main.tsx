import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
   return <main className="dark:bg-neutral-800 py-4 px-2 md:p-6">{children}</main>;
};

export default Main;
