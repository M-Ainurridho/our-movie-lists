"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { righteous } from "@/app/ui/fonts";
import ToggleDark from "@/app/ui/toggle";

const Navbar = () => {
   const [collapse, setCollapse] = useState<any>(false);

   return (
      <nav className="bg-neutral-100 w-full h-20 flex justify-between items-center px-3 md:px-4 dark:text-white dark:bg-neutral-900">
         {/* Hamburger Icon */}
         <Bars3Icon className="h-7 flex cursor-pointer md:hidden" onClick={() => setCollapse(!collapse)} />

         {/* Logo */}
         <Link href="/" className={clsx("logo text-2xl md:text-3xl", righteous.className)}>
            <span className="text-red-500">Ridho</span>
            <span>Movies</span>
         </Link>

         {/* Navigation Link */}
         <NavLink collapse={collapse} setCollapse={setCollapse} />

         {/* Toggle Switch Mode */}
         <ToggleDark />
      </nav>
   );
};

const NavLink = ({ collapse, setCollapse }: any) => {
   const [active, setActive] = useState("");

   const links = ["Home", "Popular", "Anime", "Western"];
   return (
      <div
         className={clsx("nav-link md:flex md:static md:shadow-none md:w-fit", {
            "absolute left-0 top-0 bottom-0 w-1/2 bg-neutral-100 shadow shadow-lg dark:bg-neutral-900": collapse === true,
            "hidden w-0": collapse === false,
         })}
      >
         <div className="px-5 py-6 flex justify-between items-center md:hidden">
            <p className="text-xl font-semibold">Menu</p>
            <XMarkIcon className="h-6 cursor-pointer" onClick={() => setCollapse(!collapse)} />
         </div>

         {links.map((nav) => {
            !active && setActive("home");

            return (
               <Link className={clsx("flex mx-4 p-2 hover:font-semibold duration-200", { "font-semibold": active === nav.toLowerCase() })} href={`#${nav.toLowerCase()}`} key={nav} onClick={() => setActive(nav.toLowerCase())}>
                  {nav}
               </Link>
            );
         })}
      </div>
   );
};

export default Navbar;
