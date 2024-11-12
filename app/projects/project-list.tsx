"use client";

import { ArrowUpRight } from "lucide-react";
import { Project, projects } from "./project-data";
import { techIconMap } from "./techstack";

export function ProjectList() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      {projects.map((project, index) => (
        <ProjectItem project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2" key={project.url}>
      <div className="flex items-baseline justify-between w-full">
        <a
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
      <span className="pt-3 prose prose-neutral dark:prose-invert">
        {project.description}
      </span>
      <span className="flex gap-2">
        {project.techStack?.map((item) => {
          const Icon = techIconMap[item];
          return (
            <div className="p-2 border">
              <Icon className="size-5" />
            </div>
          );
        })}
      </span>
    </div>
  );
}
