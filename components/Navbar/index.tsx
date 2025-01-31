"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItems";
import "./index.css"
import { usePathname } from "next/navigation";
import {FaBars, FaXmark} from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "Contact",
            label: "Contato"
        }
    ]

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return(
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image 
                    src="vercel.svg" 
                    width={50} 
                    height={50} 
                    alt="Logo do Sistema"
                    />
                </Link>
                <ul className={`nav-items ${openMenu ? "open" : ""}`}>
                    {items.map((item, index) => (
                        <NavItem 
                        key={index} 
                        url={item.url} 
                        label={item.label}
                        isActive={pathname === item.url}
                        />
                    ))}
                </ul>
                <button className="btn-default">
                    Contatar
                </button>

                <button className="mobile-btn" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark/> : <FaBars />}
                </button>
            </nav>
        </header>
    )
}