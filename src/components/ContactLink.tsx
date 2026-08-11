import styles from "./ContactLink.module.css";

interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  /** Set for links that leave the site (GitHub, LinkedIn) so they open in a new tab. */
  external?: boolean;
}

export default function ContactLink({
  label,
  value,
  href,
  external,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      className={styles.row}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </a>
  );
}
