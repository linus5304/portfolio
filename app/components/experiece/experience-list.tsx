import Image from "next/image";
import { experiences } from "./experience-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="p-4 prose prose-neutral dark:prose-invert">
          <CardHeader>
            <CardTitle>{exp.position}</CardTitle>
            <CardDescription className="text-sm">
              <div className="flex justify-between">
                <a
                  key={index}
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 transition-opacity duration-200 group hover:opacity-80"
                >
                  <span className="flex items-center">
                    <span>{exp.company}</span>{" "}
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
                <span>{exp.duration}</span>
              </div>
              <span>{exp.location}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-[-10px]">
            <ul className="space-y-2 leading-tight">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="mt-4">
              <span className="text-sm font-semibold">Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx}>{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
