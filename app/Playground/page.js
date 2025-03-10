import styles from "../styles/playground.module.css"
export default function Playground() {
    const wave = "/Assets/wave.webm";
    const three = "/Assets/3d.webm";
    const horizontal_scroll = "/Assets/horizontal_scroll.webm";
    const error = "/Assets/404.webm"
    const canvas_hover = "/Assets/canvas_hover.webm"
    const clip = "/Assets/clip.webm"
    const flip = "/Assets/flip.webm"
    const hover_change = "/Assets/hover_change.webm"
    const nothing_scroll = "/Assets/nothing_scroll.webm"
    const z_scroll = "/Assets/z-scroll.webm"
    const zoom_scroll = "/Assets/zoom-scroll.webm"
    const works = [{name: z_scroll, stack: ["threeJS", "GLSL"]}, {name: canvas_hover, stack: ["canvas"]}, {name: nothing_scroll, stack: ["GSAP"]}, {name: zoom_scroll, stack: ["threeJS","GLSL"]}, {name: error, stack: ["matterJs"]}, {name: clip, stack: ["GSAP"]}, {name: hover_change, stack: ["GSAP"]}, {name: flip, stack: ["GSAP", "GSAP-FLIP"]}, {name: wave, stack: ["threeJS", "GLSL"]}, {name: three, stack: ["threeJS"]}, {name: horizontal_scroll, stack: ["GSAP"]}]
    return(
        <section className={styles.Playground__section}>
            <div className={styles.playground__text__wrapper}>
                <h1 className={styles.playground__main_header}>Playground</h1>
                <h1 className={styles.playground__sub_header}>A dump of cool things i've experimented with over the years. </h1>
            </div>
            <div className={styles.__dump}>
                {works.map((proj, i) => (
                    <div key={i} className={styles.work}>
                        <video src={proj.name} className={styles.dump__video} loop muted autoPlay playsInline/>
                        <div className={styles.dump__description}>{proj.stack.map((stack, i) => (
                            <p key={i}>{stack}, </p>
                        ))}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}