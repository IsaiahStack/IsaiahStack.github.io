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

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A statically exported portfolio for presenting software projects, technical skills, and ways to connect.",
    technologies: ["TypeScript", "React", "Next.js"],
    githubUrl: "https://github.com/IsaiahStack/IsaiahStack.github.io",
    liveUrl: "https://isaiahstack.github.io",
    status: "in-progress",
  },
];
