import styles from '../styles/Popup.module.css'
export default function Popup({ children, href }) {
  return (
    <a href={href}  className={styles.popup__span}>
      {children}
      
    </a>
  );
}
