"use client"
import {Closer, Burger, Logo } from "@/components/icons";
import Link from "next/link";
import { useState } from "react"
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="flex items-center md:gap-40 font-extrabold sm:bg-transparent">
      <Link href="/" className="md:pl-40 z-10">
        <Logo loc="navbar" />
      </Link>
    <nav>
      <div className="max-w-7xl mx-auto justify-center px-2 sm:px-6 lg:px-8 right-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 top-2 flex items-center sm:hidden">
            
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6 sm:mx-auto">
                <div className="flex space-x-4">
                <CustomLink href="/" >Home</CustomLink>
                <CustomLink href="/about" >About</CustomLink>
                <CustomLink href="/shop" >Shop</CustomLink>
                <CustomLink href="/faqs" >FAQs</CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex justify-center place-items-start absolute top-5 right-3" onClick={()=>setIsOpen(!isOpen)}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none z-10
            sm:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <Burger />
            ) : (
              <Closer />
            )}
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white min-w-52 shadow-slate-400`} id="mobile-menu">
        <div className="pb-3 space-y-1 ">
          <CustomLink href="/" mob={true}>Home</CustomLink>
          <CustomLink href="/about" mob={true}>About</CustomLink>
          <CustomLink href="/shop" mob={true}>Shop</CustomLink>
          <CustomLink href="/faqs" mob={true}>FAQs</CustomLink>
        </div>
      </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;

