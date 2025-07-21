import styles from '../styles/Carousel.module.css';
import { FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
 
 
    return (
        <div className={styles.Carousel__wrapper}>
           <div className={styles.video__wrapper}>
            <video src="/Assets/comp.webm" autoPlay loop playsInline muted className={styles.video__Asset}/>
           </div>
        </div>
    );
}
