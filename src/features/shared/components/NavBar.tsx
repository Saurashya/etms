"use client";

import React from "react";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Events",
    path: "/",
  },
  {
    name: "Tickets rate",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "FaQ",
    path: "/",
  },
];

const NavBar = () => {
  return (
    <nav className="h-[8svh] md:h-[10dvh] w-full flex items-center justify-around bg-gray-100">
      <img
        src="/logo.png"
        alt="Vercel Logo"
        className="h-[17px] w-[120px] md:h-[22px] md:w-[189px]"
      />

      <div className="hamburger sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger><GiHamburgerMenu size={20}/></DropdownMenuTrigger>
          <DropdownMenuContent>
            {
              Links.map((item, index) => {
                return (
                  <DropdownMenuItem key={index}>
                    <Link href={item.path}>{item.name}</Link>
                  </DropdownMenuItem>
                );
              })
            }
            <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="links gap-4 xl:gap-12 items-center hidden sm:flex">
        {Links.map((item, index) => {
          return (
            <NavLink
              key={index}
              name={item.name}
              path={item.path}
              className="text-xs md:text-lg baumans xl:text-2xl xl:gap-4 hover:font-semibold tracking-wider"
            />
          );
        })}
      </div>
      <button className="btn-color-primary text-white px-4 py-2 rounded-sm xl:text-xl hover:cursor-pointer opacity-90 hover:opacity-100 hidden md:block">
        Login
      </button>
    </nav>
  );
};

export default NavBar;
