import ContactLink from "@/components/ContactLink";
import styles from "./page.module.css";

// Placeholders — replace with your real contact details.
// Remove the LinkedIn entry entirely if you'd rather not list it.
const CONTACT_METHODS = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "Phone",
    value: "+1 (555) 555-5555",
    href: "tel:+15555555555",
  },
  {
    label: "GitHub",
    value: "github.com/your-github-username",
    href: "https://github.com/your-github-username",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-username",
    href: "https://linkedin.com/in/your-username",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className={`container ${styles.page}`}>
      <div className={styles.intro}>
        <h1>Let&apos;s Connect</h1>
        <p className={styles.description}>
          [Placeholder message — replace with a short, professional note
          about how you&apos;d like people to get in touch.]
        </p>
      </div>

      <div className={styles.card}>
        {CONTACT_METHODS.map((method) => (
          <ContactLink key={method.label} {...method} />
        ))}
      </div>
    </section>
  );
}
