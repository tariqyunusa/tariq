"use client"
import { useState } from "react"
import { FiChevronUp } from "react-icons/fi";
import styles from '../styles/Nav.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link";

export default function Nav() {
    const [showNav, setShowNav] = useState(false)
    const links = [
        { name: "Contact", path: "/Contact" }, 
        { name: "Playground", path: "/Playground" }, 
        { name: "Projects", path: "/Projects" }, 
        { name: "Home", path: "/" }
    ];
    const [activeLink, setActiveLink] = useState(links[links.length - 1]); // Default to "Home"

    return (
        <motion.nav className={styles.navbar} onClick={() => setShowNav(!showNav)}>
            <motion.ul layout className={styles.navbar__ul} transition={{ duration: 0.6, type: "spring", stiffness: 60 }}>
                <AnimatePresence>
                    {showNav && links.map((link, idx) => (
                        <motion.li 
                            key={idx} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            transition={{ duration: 0.2, delay: 0.1 }} 
                            className={styles.navbar__list_item}
                            onClick={() => {
                                setActiveLink(link);
                                setShowNav(false); // Close menu on selection
                            }}
                        >
                            <Link href={link.path}>{link.name}</Link>
                        </motion.li>
                    ))}
                </AnimatePresence>
                {!showNav && (
                    <motion.li className={styles.navbar__list_item}>
                        {activeLink.name} <FiChevronUp />
                    </motion.li>
                )}
            </motion.ul>
        </motion.nav>
    );
}
