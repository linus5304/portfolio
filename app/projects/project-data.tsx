import { Technology } from "./techstack";

export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  techStack?: Technology[];
}

export const projects: Project[] = [
  {
    title: "YC Directory",
    year: 2024,
    description:
      "YC directory is a simple application which has a base idea like Y Combinator for entrepreneurs to pitch their Ideas and get reviews from investors",
    url: "https://yc-directory-cyan.vercel.app/",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "Node.js",
      "Sanity",
    ],
  },
  {
    title: "Chirpy",
    year: 2024,
    description:
      "This is a simple app to learn how to web servers in go programming language. The name of the demo application built is Chripy. Chirpy is a social network similar to twitter with basic functionalities.",
    url: "https://github.com/linus5304/chirpy",
    techStack: ["Go"],
  },
];
