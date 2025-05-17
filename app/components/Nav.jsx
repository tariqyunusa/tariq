"use client"

import { useEffect, useState, useRef } from "react"
import { FiChevronUp } from "react-icons/fi";
import styles from '../styles/Nav.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from "next/navigation"
import AnimatedLink from "./AnimatedLink";

export default function Nav() {
    const [showNav, setShowNav] = useState(false)
    const [activeLink, setActiveLink] = useState("");
    const pathname = usePathname();
    const navRef = useRef(null); // ⬅️ reference for detecting outside click

    const links = [
        { name: "Contact", path: "/Contact" }, 
        { name: "Playground", path: "/Playground" }, 
        { name: "Projects", path: "/Projects" }, 
        { name: "Home", path: "/" }
    ];
    
    useEffect(() => {
        const matchedLink = links.find(link => link.path === pathname);
        setActiveLink(matchedLink ? matchedLink.name : "Home");
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNav(false);
            }
        };

        if (showNav) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNav]);

    return (
        <motion.nav ref={navRef} className={styles.navbar} onClick={() => setShowNav(!showNav)}>
            <motion.ul layout className={styles.navbar__ul} transition={{ duration: 0.6, type: "tween" }}>
                <AnimatePresence>
                    {showNav && links.map((link, idx) => (
                        <div key={idx} className={styles.navbar__list_item}>
                            <AnimatedLink title={link.name} />
                        </div>
                    ))}
                </AnimatePresence>
                {!showNav && (
                    <motion.li className={styles.navbar__list_item}>
                        {activeLink} <FiChevronUp />
                    </motion.li>
                )}
            </motion.ul>
        </motion.nav>
    );
}
