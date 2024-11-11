interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  website?: string;
}

export const experiences: Experience[] = [
  {
    company: "National Financial Credit Bank (NFC Bank)",
    logo: "/logos/nfc-bank.png", // Replace with actual path or URL
    position: "Software Engineer",
    duration: "11/2023 - 08/2024",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Managed database extraction and administration for Oracle databases in the Oracle Flexcube core banking system, improving data management efficiency and supporting faster, data-driven decision-making.",
      "Developed a Nextra-based web application for documenting IT procedures, enhancing IT support workflows, response times, service quality, and operational efficiency.",
      "Collaborated with cross-functional teams to design and implement scalable software solutions aligned with business objectives.",
    ],
    technologies: [
      "Oracle Flexcube",
      "Nextra",
      "React.js",
      "Next.js",
      "TypeScript",
      "AWS",
    ],
    website: "https://nfcbank.com/", // Replace with actual URL if available
  },
  {
    company: "CloudOpex",
    logo: "/logos/cloudopex.png",
    position: "Software Engineer",
    duration: "03/2023 - 11/2023",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Developed backend API endpoints for the Nimbus project using Nest.js, ensuring smooth integration with frontend applications.",
      "Managed CI/CD pipelines with GitHub Actions, streamlining deployment processes for the Nimbus backend.",
      "Deployed cloud infrastructure using AWS RDS, ECS, and Docker, enhancing scalability and reliability of applications.",
    ],
    technologies: [
      "Nest.js",
      "TypeScript",
      "GitHub Actions",
      "AWS RDS",
      "AWS ECS",
      "Docker",
    ],
    website: "https://cloudopex.com/",
  },
  {
    company: "Data Touch Analytics",
    logo: "/logos/datatouch-analytics.png",
    position: "Software Engineer",
    duration: "03/2023 - 11/2023",
    location: "Douala, Cameroon",
    responsibilities: [
      "Led the development of the HGOPED blood bank management system by building a full-stack web application using Nest.js and Next.js, improving operational efficiency and ensuring compliance.",
      "Deployed and monitored the application using Docker, GitHub Actions, DigitalOcean, and Vercel, ensuring smooth performance and scalability.",
    ],
    technologies: [
      "Nest.js",
      "Next.js",
      "Docker",
      "GitHub Actions",
      "DigitalOcean",
      "Vercel",
    ],
    website: "https://www.linkedin.com/company/data-touch-analytics/",
  },
  {
    company: "WIZESTACK",
    logo: "/logos/wizestack.png",
    position: "Software Engineer",
    duration: "02/2022 - 01/2023",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Developed multiple microservices for Saint-Barth reservation and UMJ applications using TypeScript, Nest.js, and Next.js, significantly reducing system latency and enhancing scalability and responsiveness.",
      "Collaborated with the DevOps team on application deployment and monitoring using Docker, GitLab CI/CD, and DigitalOcean, ensuring smooth performance and scalability.",
    ],
    technologies: [
      "TypeScript",
      "Nest.js",
      "Next.js",
      "Docker",
      "GitLab CI/CD",
      "DigitalOcean",
    ],
    website: "https://www.wizestack.com/",
  },
];
