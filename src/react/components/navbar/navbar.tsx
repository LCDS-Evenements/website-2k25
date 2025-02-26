"use client";

import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/config/navbar";
import { ticketsLink } from "@/config/links";
import { MenuIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-navbar py-2 px-4 rounded-2xl flex items-center justify-between">
        <Link href="/" prefetch={false}>
          <Image src="/biscuit-logo-navbar.svg" alt="Logo des CuicuiteDays 2k25" fetchPriority="high" loading="eager" width={100} height={100} className="w-auto h-auto" />
        </Link>

        <div className="flex items-center gap-5">
          {navbarLinks.map((link, id) => (
            <Link key={id} href={link.href} target={link.target} prefetch={false} className="hidden sm:block bg-navbar-link hover:bg-navbar-link-hover transition-all font-bold text-base text-transparent bg-clip-text">
              {link.label}
            </Link>
          ))}


          <Link href={ticketsLink} prefetch={false}>
            <button className="py-1 px-3 sm:py-2 sm:px-4 rounded-lg bg-button-ticket hover:bg-button-ticket-hover cursor-pointer">
              <span className="bg-button-ticket-span font-bold text-base text-transparent bg-clip-text">
                Billetterie
              </span>
            </button>
          </Link>

          <button className="sm:hidden" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <MenuIcon size={32}/>
          </button>
        </div>

        <div
          className={cn(
            "h-fit bg-navbar rounded-2xl flex flex-col items-start justify-center gap-4 px-4 py-4 fixed top-[6.5rem] right-4 transition-all duration-300",
            menuIsOpen ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0",
          )}
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          {navbarLinks.map((link, id) => (
            <Link 
              key={id} 
              href={link.href} 
              target={link.target} 
              prefetch={false} 
              className="block sm:hidden bg-navbar-link hover:bg-navbar-link-hover transition-all font-bold text-base text-transparent bg-clip-text" 
              onClick={() => setMenuIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};