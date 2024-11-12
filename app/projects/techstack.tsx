import { Icons } from "../components/icons";

export type Technology =
  | "React.js"
  | "Next.js"
  | "TypeScript"
  | "Tailwind CSS"
  | "GraphQL"
  | "Node.js"
  | "MongoDB"
  | "PostgreSQL"
  | "Docker"
  | "AWS"
  | "Kubernetes"
  | "Terraform"
  | "Git"
  | "GitHub"
  | "Vercel"
  | "DigitalOcean"
  | "Go"
  | "Sanity";

export const techIconMap: Record<Technology, any> = {
  "React.js": Icons.react,
  "Next.js": Icons.nextjs,
  TypeScript: Icons.typescript,
  "Tailwind CSS": Icons.tailwind,
  GraphQL: Icons.graphql,
  "Node.js": Icons.nodejs,
  MongoDB: Icons.mongodb,
  PostgreSQL: Icons.postgresql,
  Docker: Icons.docker,
  AWS: Icons.aws,
  Kubernetes: Icons.kubernetes,
  Terraform: Icons.terraform,
  Git: Icons.git,
  GitHub: Icons.github,
  Vercel: Icons.vercel,
  DigitalOcean: Icons.digitalocean,
  Go: Icons.golang,
  Sanity: Icons.sanity,
};
