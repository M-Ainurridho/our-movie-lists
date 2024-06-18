import type { Metadata } from "next";
import { raleway } from "@/app/ui/fonts";

import "@/app/ui/globals.css";
import "@/app/lib/swiper";
import DarkTheme from "./ui/theme";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
   title: {
      template: "%s | MAR Movie",
      default: "MAR Movie",
   },
   description: "The Place To See The Latest Film Info",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning={true}>
         <DarkTheme>
            <body className={raleway.className} suppressHydrationWarning={true}>
               <Navbar />
               {children}
               <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" async></script>
            </body>
         </DarkTheme>
      </html>
   );
}
