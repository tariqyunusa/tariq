"use client"
import { useState } from "react"
import { FiChevronUp } from "react-icons/fi";
import styles from '../styles/Nav.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
    const [showNav, setShowNav] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const links = ["Contact", "Playground", "Projects", "Home"]
    const [activeLink, setActiveLink] = useState(links[links.length - 1])
    return(
        <>
            <motion.nav layout className={styles.navbar} onClick={() => setShowNav(!showNav)} transition={{duration: 0.6, type: "spring", stiffness: 60}}>
                <ul className={styles.navbar__ul}>
                    <AnimatePresence>
                    {showNav ? links.map((link, idx) => (
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.4, delay: 0.2}} key={idx} onClick={() => setActiveLink(link)} className={styles.navbar__list_item}>{link}</motion.li>
                   )) : ""}
                    </AnimatePresence>
                   {!showNav && (
                    <motion.li className={styles.navbar__list_item} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.1, delay: 0.1}}>{activeLink} <FiChevronUp /></motion.li>
                   )}
                </ul>
                
            </motion.nav>
        </>
    )
}