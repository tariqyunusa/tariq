"use client"
import Project from './components/Project'
import styles from './styles/Projects.module.css'
export default function Projects() {
   
    const works =  [
        {name: "GL", stack: ["Full-Stack Develoment", "Design"], alt: "GL", link: "See Live"}, 
        {name: "Campaign", stack: ["Front-End Develoment", "Design", "Creative Direction"],alt: "Campaign", link: "See Live"},
        {name: "Campaign-V2", stack: ["Front-End Develoment", "Design", "Creative Direction"], alt: "Campaign-V2", link: "See Live"},
        {name: "Node Server", stack: ["Back-End develoment"], alt: "Node Server", link: "See Live"},
        {name: "Samsung Showcase", stack: ["Front-End Develoment", "Design", "Creative Direction"], alt: "Samsung Showcase", link: "See Live"},
    ]
    return(
    
        <section className={styles.projects__section}>
            <div className={styles.inner__project_wrapper}>
                <div className={styles.projects__header_work}><h1>Selected Works</h1></div>
                <Project projects={works} />
            </div>

        </section>
        
    )
}