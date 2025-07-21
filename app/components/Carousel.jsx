import { useRef, useState, useEffect } from "react";
import styles from "../styles/Carousel.module.css";
import { VscMute, VscUnmute } from "react-icons/vsc";

export default function Carousel() {
  const [isHovered, setHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);       
  const [userWantsSound, setUserWantsSound] = useState(false); 

  const cursorRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const lerp = (start, end, t) => start + (end - start) * t;

  const handleCursor = (e) => {
    const bounds = videoWrapperRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  };

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.1);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);


  const isMuted = !isInView || !userWantsSound;

  return (
    <div className={styles.Carousel__wrapper}>
      <div
        className={styles.video__wrapper}
        ref={videoWrapperRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleCursor}
        onClick={() => setUserWantsSound(prev => !prev)}
        style={{ cursor: isHovered ? "none" : "default" }}
      >
        {isHovered && (
          <div className={styles.cursor} ref={cursorRef}>
            <div>{isMuted ? <VscUnmute /> : <VscMute />}</div>
          </div>
        )}
        <video
          ref={videoRef}
          src="/Assets/comp.webm"
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className={styles.video__Asset}
        />
      </div>
    </div>
  );
}
