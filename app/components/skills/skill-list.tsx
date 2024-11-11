import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { skills } from "./skill-data";

export function SkillsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {skills.map((category) => (
        <Card className="shadow-none" key={category.category}>
          <CardHeader className="p-4 pb-0">
            <CardTitle className="">{category.category}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2.5 p-4">
            <div className="flex items-center mb-4">
              {category.icon && (
                <span className="mr-2 text-2xl">{category.icon}</span>
              )}
            </div>
            <ul className="list-none">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 mb-2">
                  <span>{skill.icon}</span>
                  <p className="prose prose-neutral dark:prose-invert">
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
