import Carousel from './components/Carousel'
import Popup from './components/Popup'
import styles from './styles/Play.module.css'
export default function Play() {
    return(
        <section className={styles.play}>
        <div className={styles.play__wrapper}>
            <h1 className={styles.play__text_header} data-animation = 'header'>Playground</h1>
            <h1 className={styles.play__text__paragraph} data-animation = 'header'>A brief showcase of my experiments i do when i am trying to figure things out, learn or just have fun. <Popup>See all</Popup> </h1>
        </div>
        <Carousel />
        </section>
    )
}