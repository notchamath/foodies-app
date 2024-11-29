"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from './nav.link.module.css';

export default function NavLink({href, children}) {

  const currPath = usePathname();

  return (
    <Link 
      className={currPath.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link} 
      href={href}
    >
      {children}
    </Link>
  )
}