import type { Metadata } from "next";
import { raleway } from "@/app/ui/fonts";

import "@/app/ui/globals.css";

export const metadata: Metadata = {
   title: "Our Movie Lists",
   description: "The next movie lists",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={raleway.className} suppressHydrationWarning={true}>
            {children}
         </body>
      </html>
   );
}
