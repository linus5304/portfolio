import { projects } from "./project-data";

export function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 transition-opacity duration-200 group hover:opacity-80"
        >
          <div className="flex flex-col">
            <div className="flex items-baseline justify-between w-full">
              <span className="font-medium tracking-tight text-black dark:text-white">
                {project.title}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                {project.year}
              </span>
            </div>
            <p className="pt-3 prose prose-neutral dark:prose-invert">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
