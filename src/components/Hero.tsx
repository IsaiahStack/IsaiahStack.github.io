import Link from "next/link";
import styles from "./Hero.module.css";

const GITHUB_URL = "https://github.com/IsaiahStack";

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <h1 className={styles.name}>Isaiah Raust</h1>
        <p className={styles.title}>Software Engineer</p>

        <p className={styles.intro}>
          I build thoughtful software with TypeScript, React, Next.js, and
          modern web technologies.
        </p>

        <div className={styles.actions}>
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub
          </a>
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaCard}>
            <p className={styles.metaLabel}>Currently learning</p>
            <p className={styles.metaText}>
              Full-stack application development with Next.js and TypeScript.
            </p>
          </div>
          <div className={styles.metaCard}>
            <p className={styles.metaLabel}>Enjoys building</p>
            <p className={styles.metaText}>
              Fast, accessible interfaces and practical developer tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
