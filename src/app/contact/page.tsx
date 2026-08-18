import type { Metadata } from "next";
import ContactLink from "@/components/ContactLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to get in touch — email, phone, GitHub, and LinkedIn.",
};

const CONTACT_METHODS = [
  {
    label: "GitHub",
    value: "github.com/IsaiahStack",
    href: "https://github.com/IsaiahStack",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className={`container ${styles.page}`}>
      <div className={styles.intro}>
        <h1 className="page-title">Let&apos;s Connect</h1>
        <p className={styles.description}>
          Find my work, follow along with what I&apos;m building, and get in
          touch through GitHub.
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
