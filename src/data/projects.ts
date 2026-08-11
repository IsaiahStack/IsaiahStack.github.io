export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  /** Project name shown on the card. */
  title: string;
  /** Short summary of what the project does. */
  description: string;
  /** Languages, frameworks, and tools used. */
  technologies: string[];
  /** Link to the project's source code. */
  githubUrl: string;
  /** Link to a hosted/live version, if one exists. */
  liveUrl?: string;
  /** Path to a screenshot in /public, if one exists. */
  image?: string;
  /** Where the project currently stands. */
  status?: ProjectStatus;
}

/**
 * Placeholder projects — none of these are real work yet.
 * Replace each entry below with an actual project when it's ready to show.
 * To add a new project, copy one of these objects and edit its fields.
 */
export const PROJECTS: Project[] = [
  {
    title: "[Placeholder Project One]",
    description:
      "Placeholder project description. Replace this with a short summary of what the project does, the problem it solves, and your role in building it.",
    technologies: ["TypeScript", "React", "Next.js"],
    githubUrl: "https://github.com/your-github-username/project-one",
    liveUrl: "https://your-demo-link.example.com",
    status: "in-progress",
  },
  {
    title: "[Placeholder Project Two]",
    description:
      "Placeholder project description. Replace this with a short summary covering the goal of the project and what makes it interesting technically.",
    technologies: ["C++", "SQL"],
    githubUrl: "https://github.com/your-github-username/project-two",
    status: "planned",
  },
  {
    title: "[Placeholder Project Three]",
    description:
      "Placeholder project description. Replace this with a short summary of the project, including any notable challenges you solved.",
    technologies: ["JavaScript", "Git", "Linux"],
    githubUrl: "https://github.com/your-github-username/project-three",
    status: "completed",
  },
];
