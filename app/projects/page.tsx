import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { ProjectList } from "./project-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        <ProjectList />
      </div>
    </section>
  );
}
