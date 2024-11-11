import { ReactNode } from "react";
import { Icons } from "../icons";
import { Icon } from "lucide-react";

interface SkillItem {
  name: string;
  icon?: any;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Go", icon: <Icons.golang className="size-5" /> },
      { name: "Java", icon: <Icons.java className="size-5" /> },
      { name: "JavaScript", icon: <Icons.javascript className="size-5" /> },
      { name: "TypeScript", icon: <Icons.typescript className="size-5" /> },
      { name: "Python", icon: <Icons.python className="size-5" /> },
      { name: "C/C++", icon: <Icons.c className="size-5" /> },
      { name: "Bash", icon: <Icons.bash className="size-5" /> },
    ],
  },
  {
    category: "Front-End Development",
    skills: [
      { name: "HTML", icon: <Icons.html className="size-5" /> },
      { name: "CSS", icon: <Icons.css className="size-5" /> },
      { name: "React.js", icon: <Icons.react className="size-5" /> },
      { name: "Next.js", icon: <Icons.nextjs className="size-5" /> },
      { name: "Tailwind CSS", icon: <Icons.tailwind className="size-5" /> },
      { name: "GraphQL", icon: <Icons.graphql className="size-5" /> },
    ],
  },
  {
    category: "DevOps Tools",
    skills: [
      { name: "AWS", icon: <Icons.aws className="size-5" /> },
      { name: "Docker", icon: <Icons.docker className="size-5" /> },
      { name: "Kubernetes", icon: <Icons.kubernetes className="size-5" /> },
      { name: "Terraform", icon: <Icons.terraform className="size-5" /> },
      { name: "Git", icon: <Icons.git className="size-5" /> },
      { name: "GitLab", icon: <Icons.gitlab className="size-5" /> },
      { name: "GitHub", icon: <Icons.github className="size-5" /> },
      { name: "Vercel", icon: <Icons.vercel className="size-5" /> },
      { name: "DigitalOcean", icon: <Icons.digitalocean className="size-5" /> },
    ],
  },
  {
    category: "Databases & Operating Systems",
    skills: [
      { name: "PostgreSQL", icon: <Icons.postgresql className="size-5" /> },
      { name: "MySQL", icon: <Icons.mysql className="size-5" /> },
      { name: "MongoDB", icon: <Icons.mongodb className="size-5" /> },
      { name: "Oracle", icon: <Icons.oracle className="size-5" /> },
      { name: "Linux/Unix", icon: <Icons.linux className="size-5" /> },
      { name: "macOS", icon: <Icons.macos className="size-5" /> },
      { name: "Windows", icon: <Icons.windows className="size-5" /> },
    ],
  },
  // {
  //   category: "Soft Skills",
  //   skills: [
  //     { name: "Problem-Solving", icon: "🧩" },
  //     { name: "Teamwork", icon: "🤝" },
  //     { name: "Communication", icon: "💬" },
  //     { name: "Time Management", icon: "⏰" },
  //     { name: "Adaptability", icon: "🔄" },
  //   ],
  // },
];
