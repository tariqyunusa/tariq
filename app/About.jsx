import styles from './styles/About.module.css'
import Popup from './components/Popup'
export default function About() {
    return(
        <section className={styles.about__section}>
            <div className={styles.about__section_text__wrapper}>
                <h1 className={styles.about__header}>
                I am someone who enjoys being engaged in the creative process so when i am not writing code i curate <Popup>playlists</Popup> and <Popup>podcasts</Popup>, <Popup>captures natures essence</Popup> , <Popup>read alot</Popup>, <Popup>write sometimes</Popup> and even though i am not a conventional designer i experiment with layouts and typography.
                </h1>
            </div>
        </section>
    )
}