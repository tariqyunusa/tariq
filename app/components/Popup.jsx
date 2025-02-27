import styles from '../styles/Popup.module.css'
export default function Popup({ children, active, media }) {
  return (
    <span  className={styles.popup__span}>
      {children}
      
    </span>
  );
}
