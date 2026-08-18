import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software projects and coursework.",
};

export default function ProjectsPage() {
  return (
    <section className={`container ${styles.page}`}>
      <div className={styles.intro}>
        <h1 className="page-title">Projects</h1>
        <p className={styles.description}>
          A selection of software work built with web technologies and
          systems-focused tools.
        </p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
