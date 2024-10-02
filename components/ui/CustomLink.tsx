"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface linkProps{
    href: string,
    mob?: boolean
}
export default function CustomLink({href,mob=false, children}:PropsWithChildren<linkProps>){
    const path = usePathname()
   
 
    return (
        !mob?<Link href={href} className={` hover:font-extrabold ${path && 'font-extrabold'} text-primary px-3 py-2 rounded-md text-sm font-normal`}>
            {children}
        </Link>:
        <Link href={href} className="block px-3 py-2 rounded-md text-base font-medium">
            {children}
        </Link>
    )
}