import styles from '../styles/Carousel.module.css';
import { FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
    const wave = "/Assets/wave.webm";
    const three = "/Assets/infinite_grid.mp4";
    const horizontal_scroll = "/Assets/horizontal_scroll.webm";

    const showcase = [
        { videoId: 0, video: wave, duration: 17 },
        { videoId: 1, video: three, duration: 19 },
        { videoId: 2, video: horizontal_scroll, duration: 17 }
    ];

    const [isPlaying, setIsPlaying] = useState(true);
    const [videoIndex, setVideoIndex] = useState(0);
    const carouselRef = useRef(null);
    const videoRef = useRef([]);
    const indicatorRef = useRef([]);
    const activeAnimRef = useRef(null);
    const timeoutRef = useRef(null); 

    useEffect(() => {
        playVideo(videoIndex);

        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: playCurrentVideo,
            onLeave: resetAllVideos,
            onEnterBack: playCurrentVideo,
            onLeaveBack: resetAllVideos,
        });

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            startAutoSwitch();
        }
        return () => clearTimeout(timeoutRef.current);
    }, [videoIndex, isPlaying]);

    const startAutoSwitch = () => {
        clearTimeout(timeoutRef.current); 
        timeoutRef.current = setTimeout(() => {
            const nextIndex = (videoIndex + 1) % showcase.length; 
            playVideo(nextIndex);
        }, showcase[videoIndex].duration * 1000);
    };

    const playVideo = (idx) => {
        setVideoIndex(idx);
        clearTimeout(timeoutRef.current);

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

        if (activeAnimRef.current) {
            activeAnimRef.current.kill();
        }

        const carouselItemWidth = videoRef.current[0]?.offsetWidth || 0; 

        activeAnimRef.current = gsap.timeline();
        activeAnimRef.current.to(carouselRef.current, {
            x: `-${idx * carouselItemWidth}px`,
            duration: 1.2,
            ease: "power3.inOut",
        });

        if (isPlaying) {
            startAutoSwitch();
        }
    };

    const playCurrentVideo = () => {
        videoRef.current[videoIndex]?.play();
    };

    const resetAllVideos = () => {
        videoRef.current.forEach((video) => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const handlePlayPause = () => {
        const currentVideo = videoRef.current[videoIndex];
        if (isPlaying && !currentVideo.paused) {
            currentVideo.pause();
            gsap.globalTimeline.pause();
            clearTimeout(timeoutRef.current);
        } else if (!isPlaying && currentVideo.paused) {
            currentVideo.play();
            gsap.globalTimeline.resume();
            startAutoSwitch();
        }
        setIsPlaying(!isPlaying);
    };

    const handleRestart = () => {
        playVideo(0);
        setIsPlaying(true);
    };

    const handleIndicatorClick = (idx) => {
        playVideo(idx);
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
                        ref={(el) => (indicatorRef.current[i] = el)}
                        onClick={() => handleIndicatorClick(i)}
                    >
                        <span className="progress"></span>
                    </span>
                ))}

                <div className={styles.controls__playback} onClick={handlePlayPause}>
                    {isPlaying ? <FiPause /> : <FiPlay />}
                </div>
                <div className={styles.controls__restart} onClick={handleRestart}>
                    <FiRotateCcw />
                </div>
            </div>
        </div>
    );
}
