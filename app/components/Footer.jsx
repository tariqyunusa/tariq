import styles from '../styles/Footer.module.css'
import { FiGithub, FiInstagram, FiLinkedin,  FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div className={styles.footer_redundant}>
     <div className={styles.footer__wrapper}>
        <h1>Got a question, offer, idea in mind ? mail me lets talk further.</h1>
      </div>
     </div>
      <div className={styles.footer__links}>
      <FiGithub />
      <FiInstagram />
      <FiLinkedin />
      <FiTwitter />
      </div>
    </footer>
  )
}

export default Footer
