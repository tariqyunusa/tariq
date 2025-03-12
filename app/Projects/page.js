"use client"
import { useEffect } from "react"
import styles from "../styles/project_section.module.css"
import { textReveal } from "../utils/Animations"
export default function Projects() {
    useEffect(() => {textReveal()},[])
    return(
        <section className={styles.projects__section_page}>
            <div className={styles.projects__section_wrapper}>
                <h1 data-animation = 'header'>
                🏗️This Page is still under contruction
                </h1>
            </div>
        </section>
    )
}