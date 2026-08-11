import styles from "./Skills.module.css";

// Placeholder skills — edit this list to match your own experience.
const SKILLS: string[] = [
  "C++",
  "C",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Linux",
  "Databases",
  "Networking",
];

export default function Skills() {
  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.heading}>Skills</h2>
      <p className={styles.subheading}>
        Technologies and tools I&apos;m currently working with.
      </p>

      <ul className={styles.list}>
        {SKILLS.map((skill) => (
          <li key={skill} className={styles.badge}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
