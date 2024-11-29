import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from '@/components/main-header/main-header-bg';
import NavLink from "./nav-link";

import cssClasses from "./main-header.module.css";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground/>
      <header className={cssClasses.header}>
        <Link href="/" className={cssClasses.logo}>
          <Image src={logoImg} alt="Logo Image" priority/>
          NextLevel Food
        </Link>

        <nav className={cssClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  )
}