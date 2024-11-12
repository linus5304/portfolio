import { ArrowUpRight } from "lucide-react";
import { projects } from "./project-data";

export function ProjectList() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {projects.map((project, index) => (
        <div className="flex flex-col" key={project.url}>
          <div className="flex items-baseline justify-between w-full">
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity duration-200 group hover:opacity-80"
            >
              <div className="flex items-center">
                <span className="font-medium tracking-tight text-black dark:text-white">
                  {project.title}
                </span>
                <ArrowUpRight className="size-4" />
              </div>
            </a>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
              {project.year}
            </span>
          </div>
          <p className="pt-3 prose prose-neutral dark:prose-invert">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}
