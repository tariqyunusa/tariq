import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <>
    <section className={styles.section}>
      <div className={styles.hero__section_main_text}>
        <h1>
        Hi There, i am Tariq Yunusa a creative software engineer currently residing in yola, nigeria who has 3+ years  experience building services, tools, products and curating engaging experiences on the web.
        </h1>
      </div>
    </section>
   </>
  );
}
