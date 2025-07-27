"use client"
import Project from './components/Project'
import styles from './styles/Projects.module.css'
export default function Projects() {
   
    const works =  [
        {name: "LVI Media", stack: ["Front-End Develoment"],alt: "LVI Media", link: "See Live", route: "https://lvi-media-one.vercel.app/"},
        {name: "Sophie's Eclat", stack: ["Front-End Develoment", ], alt: "Sophie's Eclat", link: "See Live", route: "https://sophie-clat.vercel.app/"}, 
        {name: "Campaign-V2", stack: ["Front-End Develoment", "Design"], alt: "Campaign-V2", link: "See Live", route: "https://campaign-v2.vercel.app/"},
        {name: "Tone Hunter", stack: ["Front-End Development"], alt: "Tone Hunter", link: "See Live", route: "https://www.npmjs.com/package/tone-hunter"},
    ]
    return(
    
        <section className={styles.projects__section}>
            <div className={styles.inner__project_wrapper}>
                <div className={styles.projects__header_work}><h1 data-animation = 'header'>Selected Works</h1></div>
                <Project projects={works} />
            </div>

        </section>
        
    )
}