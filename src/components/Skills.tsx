import styles from "./Skills.module.css";
import type { CSSProperties } from "react";

const SKILLS = [
  { name: "C++", color: "#00599c" },
  { name: "C", color: "#a8b9cc" },
  { name: "SQL", color: "#e38c00" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#f4f6fb" },
  { name: "Git", color: "#f05032" },
  { name: "GitHub", color: "#f0f6fc" },
  { name: "Linux", color: "#fcc624" },
  { name: "Databases", color: "#4db6ac" },
  { name: "Networking", color: "#8b9eff" },
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
          <li
            key={skill.name}
            className={styles.badge}
            style={{ "--skill-color": skill.color } as CSSProperties}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
