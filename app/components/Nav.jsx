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
            <motion.nav  className={styles.navbar} onClick={() => setShowNav(!showNav)} >
                <motion.ul layout className={styles.navbar__ul} transition={{duration: 0.6, type: "spring", stiffness: 60}}>
                    <AnimatePresence>
                    {showNav ? links.map((link, idx) => (
                    <motion.li initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2, delay: 0.1}} key={idx} onClick={() => setActiveLink(link)} className={styles.navbar__list_item}>{link}</motion.li>
                   )) : ""}
                    </AnimatePresence>
                   {!showNav && (
                    <motion.li className={styles.navbar__list_item} >{activeLink} <FiChevronUp /></motion.li>
                   )}
                </motion.ul>
                
            </motion.nav>
        </>
    )
}