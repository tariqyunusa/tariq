import styles from '../styles/Carousel.module.css'
import { FiPause } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";
import { FiRotateCcw } from "react-icons/fi";
import {useRef, useEffect} from 'react'

export default function Carousel() {
    const wave ="/Assets/wave.webm"
    const three = "/Assets/3d.webm"
    const horizontal_scroll = "/Assets/horizontal_scroll.webm"
    const showcase = [wave,horizontal_scroll,three]
    useEffect(() => {

    },[])
    const videoRef = useRef([])
    const vidIdentifierRef = useRef([]) 
    return(
        <div className={styles.Carousel__wrapper}>
           <div className={styles.Carousel__redundant}>
           {showcase.map((show, idx) => (
                <div className={styles.Carousel} key={idx}>
                    <video src={show} loop muted playsInline ref={(el) => (videoRef.current[idx] = el)}></video>
                </div>
            ))}
           </div>
        
           <div className={styles.carousel__identifier}>
                {showcase.map((_, i) => (
                    <span className={styles.carousel_video__identifier} key={i} ref={(el) => (vidIdentifierRef.current[i] = el)}></span>
                ))}
            <div className={styles.controls__playback}><FiPause /></div>

            </div>
           
        </div>
    )
} 