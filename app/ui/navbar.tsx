import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { righteous } from "@/app/ui/fonts";
import ToggleDark from "@/app/ui/toggle";

const Navbar = () => {
   return (
      <nav className="bg-neutral-100 w-full h-20 flex justify-between items-center px-3 md:px-4 dark:text-white dark:bg-neutral-800">
         {/* Hamburger Icon */}
         <Bars3Icon className="h-7 flex md:hidden" />

         {/* Logo */}
         <div className={clsx("logo", righteous.className)}>
            <p className="text-2xl md:text-3xl">
               <span className="text-red-500">Our</span>
               <span>Movies</span>
            </p>
         </div>

         {/* Navigation Link */}
         <NavLink />

         {/* Toggle Switch Mode */}
         <ToggleDark />
      </nav>
   );
};

const NavLink = () => {
   const links = [
      {
         nav: "Home",
         href: "/",
      },
      {
         nav: "Popular",
         href: "/popular",
      },
      {
         nav: "Anime",
         href: "/anime",
      },
      {
         nav: "Western",
         href: "/western",
      },
   ];
   return (
      <div className="nav-link hidden md:flex">
         {links.map((nav) => (
            <Link
               className="flex mx-4 p-2 transition duration-0 hover:duration-200 hover:font-semibold"
               href={nav.href}
               key={nav.nav}
            >
               {nav.nav}
            </Link>
         ))}
      </div>
   );
};

export default Navbar;
