import styles from '../styles/Carousel.module.css';
import { FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
    const wave = "/Assets/wave.webm";
    const three = "/Assets/3d.webm";
    const horizontal_scroll = "/Assets/horizontal_scroll.webm";

    const showcase = [
        { videoId: 0, video: wave, duration: 17 },
        { videoId: 1, video: horizontal_scroll, duration: 17 },
        { videoId: 2, video: three, duration: 23 }
    ];

    const [isPlaying, setIsPlaying] = useState(true);
    const [videoIndex, setVideoIndex] = useState(0);
    const carouselRef = useRef(null);
    const videoRef = useRef([]);
    const timelineRef = useRef(null);

    useEffect(() => {
        timelineRef.current = gsap.timeline({ repeat: -1, paused: true });

        showcase.forEach((item, idx) => {
            timelineRef.current.to(carouselRef.current, {
                x: `-${idx * 80}rem`, 
                duration: 1,
                ease: "power2.inOut",
                onStart: () => {
                    setVideoIndex(idx);
                    const currentVideo = videoRef.current[idx];

                    if (currentVideo) {
                        currentVideo.currentTime = 0; 
                        currentVideo.play();
                    }

             
                    videoRef.current.forEach((video, i) => {
                        if (i !== idx && video) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    });
                }
            }).to({}, { duration: item.duration }); 
        });

        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
                timelineRef.current.play();
                videoRef.current[videoIndex]?.play();
            },
            onLeave: () => {
                videoRef.current.forEach((video) => {
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
                timelineRef.current.pause();
            },
            onEnterBack: () => {
                timelineRef.current.play();

                const currentVideo = videoRef.current.find((vid, idx) => idx === videoIndex);
                if (currentVideo) {
                    currentVideo.currentTime = 0;
                    currentVideo.play();
                }
            },
            onLeaveBack: () => {
                videoRef.current.forEach((video) => {
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
                timelineRef.current.pause();
            },
        });

        return () => {
            timelineRef.current.kill();
            ScrollTrigger.killAll();
        };
    }, []);

    const handlePlayPause = () => {
        if (isPlaying) {
            timelineRef.current.pause();
            videoRef.current[videoIndex]?.pause();
        } else {
            timelineRef.current.play();
            videoRef.current[videoIndex]?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleRestart = () => {
        timelineRef.current.restart();
        setIsPlaying(true);
    };

    return (
        <div className={styles.Carousel__wrapper}>
            <div className={styles.Carousel__redundant} ref={carouselRef}>
                {showcase.map((show, idx) => (
                    <div className={styles.Carousel} key={idx}>
                        <video
                            src={show.video}
                            loop
                            muted
                            playsInline
                            ref={(el) => (videoRef.current[idx] = el)}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.carousel__identifier}>
                {showcase.map((_, i) => (
                    <span
                        className={styles.carousel_video__identifier}
                        key={i}
                        style={{ backgroundColor: videoIndex === i ? "#000" : "#B3B3B3" }}
                    ></span>
                ))}

                <div className={styles.controls__playback} onClick={handlePlayPause}>
                    {isPlaying ? <FiPause /> :  <FiPlay />}
                </div>
                <div className={styles.controls__restart} onClick={handleRestart}>
                    <FiRotateCcw />
                </div>
            </div>
        </div>
    );
}
