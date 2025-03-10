"use client"
import { useEffect, useState } from "react"
import { FiChevronUp } from "react-icons/fi";
import styles from '../styles/Nav.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link";
import {usePathname} from "next/navigation"

export default function Nav() {
    const [showNav, setShowNav] = useState(false)
    const [activeLink, setActiveLink] = useState(); 

    const links = [
        { name: "Contact", path: "/Contact" }, 
        { name: "Playground", path: "/Playground" }, 
        { name: "Projects", path: "/Projects" }, 
        { name: "Home", path: "/" }
    ];
    const pathname = usePathname()

  useEffect(() => {
    if(pathname === '/Contact'){
      setActiveLink("Contac")
    } else if(pathname === '/Projects'){
      setActiveLink("Projects")
    }else if(pathname === '/Playground'){
      setActiveLink("Playground")
    }else{
      setActiveLink("Home")
    }
  },[pathname])

    

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
                                setShowNav(false);
                            }}
                        >
                            <Link href={link.path}>{link.name}</Link>
                        </motion.li>
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
