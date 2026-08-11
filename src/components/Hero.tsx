import Link from "next/link";
import styles from "./Hero.module.css";

// Placeholder — replace with your real GitHub profile URL.
const GITHUB_URL = "https://github.com/your-github-username";

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Hi, I&apos;m</span>
        <h1 className={styles.name}>[Your Name]</h1>
        <p className={styles.title}>
          [Your Title — e.g. Software Engineering Student]
        </p>

        <p className={styles.intro}>
          [A short professional description about the software you build,
          the technologies you&apos;re learning, and the kind of projects
          you develop.]
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
              [Brief description of what you are currently learning.]
            </p>
          </div>
          <div className={styles.metaCard}>
            <p className={styles.metaLabel}>Enjoys building</p>
            <p className={styles.metaText}>
              [Brief description of what you enjoy building.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
