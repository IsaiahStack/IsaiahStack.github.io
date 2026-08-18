import Image from "next/image";
import type { Project, ProjectStatus } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    image,
    status,
  } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.projectPreview} aria-hidden="true">
            <span>{"</>"}</span>
          </div>
        )}

        {status && (
          <span className={styles.status} data-status={status}>
            <span className={styles.statusDot} />
            {STATUS_LABEL[status]}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.techList}>
          {technologies.map((tech) => (
            <li key={tech} className={styles.techBadge}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label={`View source code for ${title} on GitHub`}
          >
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`View live demo of ${title}`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
