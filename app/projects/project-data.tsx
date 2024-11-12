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
    description:
      "This is a simple app to learn how to web servers in go programming language. The name of the demo application built is Chripy. Chirpy is a social network similar to twitter with basic functionalities.",
    url: "https://github.com/linus5304/chirpy",
  },
  {
    title: "YC Directory",
    year: 2024,
    description:
      "YC directory is a simple application which has a base idea like Y Combinator for entrepreneurs to pitch their Ideas and get reviews from investors",
    url: "https://yc-directory-cyan.vercel.app/",
  },
];
