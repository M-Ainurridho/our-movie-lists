"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { righteous } from "@/app/ui/fonts";
import { ToggleDark } from "@/app/ui/theme";
import { usePathname } from "next/navigation";
import Search from "./home/search";
const Navbar = () => {
   const [collapse, setCollapse] = useState<any>(false);

   return (
      <nav className="bg-neutral-100 w-full h-16 flex md:justify-between items-center px-3 sticky top-0 left-0 right-0 z-40 md:px-8 dark:text-white dark:bg-neutral-900 shadow shadow-sm dark:shadow dark:shadow-neutral-800">
         {/* Hamburger Icon */}
         <Bars3Icon className="h-7 flex cursor-pointer md:hidden" onClick={() => setCollapse(!collapse)} />

         {/* Logo */}
         <Link href="/" className={clsx("logo hidden md:block md:text-3xl", righteous.className)}>
            <span className="text-red-500">MAR</span>
            <span>Movie</span>
         </Link>

         {/* Navigation Link */}
         <NavLink collapse={collapse} setCollapse={setCollapse} />

         {/* Toggle Switch Mode */}
         <div className="flex items-center gap-x-3 ml-3 grow md:grow-0 ">
            <Search />
            <ToggleDark />
         </div>
      </nav>
   );
};

const NavLink = ({ collapse, setCollapse }: any) => {
   const pathname = usePathname();

   const links = [
      {
         nav: "Home",
         target: "/",
      },
      {
         nav: "Genre",
         target: "/movie/genre",
      },
   ];
   return (
      <div
         className={clsx("nav-link md:flex md:static md:shadow-none md:w-fit", {
            "fixed left-0 top-0 bottom-0 w-1/2 bg-neutral-100 shadow shadow-lg z-50 dark:bg-neutral-900": collapse === true,
            "hidden w-0": collapse === false,
         })}
      >
         <div className="px-5 py-6 flex justify-between items-center md:hidden">
            <p className="text-xl font-semibold">Menu</p>
            <XMarkIcon className="h-6 cursor-pointer" onClick={() => setCollapse(!collapse)} />
         </div>

         {links.map((nav) => {
            return (
               <Link className={clsx("flex items-center mx-4 p-2 relative", { "font-semibold": pathname === nav.target })} href={`${nav.target}`} key={nav.nav}>
                  <span className="hover:font-semibold duration-200">{nav.nav}</span>
               </Link>
            );
         })}
      </div>
   );
};

export default Navbar;
