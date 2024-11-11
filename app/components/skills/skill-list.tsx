import { skills } from "./skill-data";

export function SkillsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {skills.map((category) => (
        <div key={category.category} className="p-4 bg-white rounded shadow-md">
          <div className="flex items-center mb-4">
            {category.icon && (
              <span className="mr-2 text-2xl">{category.icon}</span>
            )}
            <h3 className="text-xl font-semibold">{category.category}</h3>
          </div>
          <ul className="list-none">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex items-center mb-2">
                {skill.icon && (
                  <span className="mr-2 text-lg">{skill.icon}</span>
                )}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
