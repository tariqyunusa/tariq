"use client"
import Project from './components/Project'
import styles from './styles/Projects.module.css'
export default function Projects() {
   
    const works =  [
        {name: "GL", stack: ["Full-Stack Develoment", "Design"], alt: "GL", link: "See Live", route: "https://gl-blog-qiro.vercel.app/"}, 
        {name: "Campaign", stack: ["Front-End Develoment", "Design", "Creative Direction"],alt: "Campaign", link: "See Live", route: "https://campaign-chi.vercel.app/"},
        {name: "Campaign-V2", stack: ["Front-End Develoment", "Design", "Creative Direction"], alt: "Campaign-V2", link: "See Live", route: "https://campaign-v2.vercel.app/"},
        {name: "Node Server", stack: ["Back-End develoment"], alt: "Node Server", link: "See Live", route: "https://github.com/tariqyunusa/JSON-webserver"},
        {name: "Samsung Showcase", stack: ["Front-End Develoment", "Design", "Creative Direction"], alt: "Samsung Showcase", link: "See Live", route: "https://samsung-s24-showcase.vercel.app/"},
        {name: "Tone Hunter", stack: ["Front-End Development"], alt: "Tone Hunter", link: "See Live", route: "https://www.npmjs.com/package/tone-hunter"},
        {name: "Youtube Downloader", stack: ["Scripting"], alt: "Youtube Downloader", link: "See Live", route: "https://github.com/tariqyunusa/youtube-downloader.git"},
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