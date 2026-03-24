import Link from "next/link";
import styles from "./career-hero.module.scss";

export default function CareerHero() {
  return (
    <section className={styles.hero} aria-labelledby="career-hero-heading">
      <div className={styles.inner}>
        <span className={styles.badge}>JOIN THE Biztal</span>
        <h1 id="career-hero-heading" className={styles.title}>
        We couldn't think of a creative tagline… come join us and suggest one!
        </h1>
        <p className={styles.subtitle}>
        Biztalbox is for the imaginative and curious.

Create bold digital experiences. Grow through real challenges, meaningful projects, and ideas that leave a mark.
        </p>
        <div className={styles.actions}>
        <Link href="/about" className={styles.btnSecondary}>
            About us
          </Link>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact
          </Link>
          
        </div>
      </div>
    </section>
  );
}
