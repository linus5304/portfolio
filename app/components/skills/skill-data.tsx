interface SkillItem {
  name: string;
  icon?: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
  icon?: string;
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "👨‍💻",
    skills: [
      { name: "Go", icon: "🟩" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🟦" },
      { name: "Python", icon: "🐍" },
      { name: "C/C++", icon: "🔴" },
      { name: "Bash", icon: "🐚" },
    ],
  },
  {
    category: "Front-End Development",
    icon: "🎨",
    skills: [
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "🚀" },
      { name: "Tailwind CSS", icon: "🌬️" },
      { name: "GraphQL", icon: "🔗" },
    ],
  },
  {
    category: "DevOps Tools",
    icon: "⚙️",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Terraform", icon: "🌍" },
      { name: "Git", icon: "🔧" },
      { name: "GitLab", icon: "🐘" },
      { name: "GitHub", icon: "🐱" },
      { name: "Vercel", icon: "🚀" },
      { name: "DigitalOcean", icon: "🌊" },
    ],
  },
  {
    category: "Databases & Operating Systems",
    icon: "💾",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Oracle", icon: "🦊" },
      { name: "Linux/Unix", icon: "🐧" },
      { name: "macOS", icon: "🍎" },
      { name: "Windows", icon: "🪟" },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Problem-Solving", icon: "🧩" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Communication", icon: "💬" },
      { name: "Time Management", icon: "⏰" },
      { name: "Adaptability", icon: "🔄" },
    ],
  },
];
