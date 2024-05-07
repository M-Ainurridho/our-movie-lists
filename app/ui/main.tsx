import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
   return <main className="grid gap-y-6 dark:bg-neutral-800 py-4 px-2 md:p-6">{children}</main>;
};

export default Main;
