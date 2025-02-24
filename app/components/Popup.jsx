import styles from '../styles/Popup.module.css'
import {DotLottieReact} from 'react-lottie'
export default function Popup({ children, active, media }) {
  return (
    <span  className={styles.popup__span}>
      {children}
      {active && (
        <div
        className={styles.__popup}
        >
          <video src={media} loop autoPlay playsInline muted />
        </div>
      )}
    </span>
  );
}
