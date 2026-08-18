import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; {year} Portfolio. Built with Next.js &amp; TypeScript.</p>
        <div className={styles.links}>
          <a
            href="https://github.com/IsaiahStack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
