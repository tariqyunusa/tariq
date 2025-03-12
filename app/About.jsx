import styles from './styles/About.module.css'
import Popup from './components/Popup'
export default function About() {
    return(
        <section className={styles.about__section}>
            <div className={styles.about__section_text__wrapper}>
                <h1 className={styles.about__header} data-animation = 'header'>
                I am someone who enjoys being engaged in the creative process so when i am not writing code i curate <Popup href={"https://open.spotify.com/playlist/5FAn5H9fbeLr5ibE4vRCHC?si=HyUp6-tPQjyRatMHwzN_6g"}>playlists</Popup> and <Popup href={"https://open.spotify.com/playlist/2kxFggA2JwT4WsCEptgir4?si=DwGXomlnQAmnBViQ4GGUNg"}>podcasts</Popup>, <Popup href={'https://vsco.co/tariikhh'}>captures natures essence</Popup> , <Popup href={'https://medium.com/@tariikhyunusa'}>read alot</Popup>, <Popup href={'https://medium.com/@tariikhyunusa'}>write sometimes</Popup> and even though i am not a conventional designer i experiment with layouts and typography.
                </h1>
            </div>
        </section>
    )
}