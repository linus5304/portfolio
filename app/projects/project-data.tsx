export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Chirpy",
    year: 2023,
    description: "",
    url: "https://example.com/",
  },
  {
    title: "YC Directory",
    year: 2024,
    description:
      "YC directory is a simple application which has a base idea like Y Combinator for entrepreneurs to pitch their Ideas and get reviews from investors",
    url: "https://yc-directory-cyan.vercel.app/",
  },
];
