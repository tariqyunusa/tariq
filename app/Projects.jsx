import Project from './components/Project'
import styles from './styles/Projects.module.css'
export default function Projects() {
    const works =  [
        {name: "GL", stack: ["Full-Stack Develoment", "Design"]}, 
        {name: "Campaign", stack: ["Front-End Develoment", "Design", "Creative Direction"]},
        {name: "Campaign-V2", stack: ["Front-End Develoment", "Design", "Creative Direction"]},
        {name: "Node Server", stack: ["Back-End develoment"]},
        {name: "Samsung Showcase", stack: ["Front-End Develoment", "Design", "Creative Direction"]},
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