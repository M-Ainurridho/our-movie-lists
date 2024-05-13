import type { Metadata } from "next";
import { raleway } from "@/app/ui/fonts";

import "@/app/ui/globals.css";
import DarkTheme from "./ui/theme";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
   title: "Ridho Movie Lists",
   description: "The next movie lists",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <DarkTheme>
            <body className={raleway.className} suppressHydrationWarning={true}>
               <Navbar />
               {children}
            </body>
         </DarkTheme>
      </html>
   );
}
