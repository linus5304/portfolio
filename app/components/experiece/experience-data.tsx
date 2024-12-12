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
    position: "Software Developer",
    duration: "11/2023 - 08/2024",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Contributed to optimizing a high-performance Java and python microservice backend serving 100,000+ active mobile users and handling over 5 million daily transactions, ensuring seamless user experiences and robust system stability. Strengthened existing CI/CD pipelines using GitLab, Docker, and Kubernetes to improve deployment frequency by 30% and enhance the platform’s resilience under peak load.",
      "Strengthened existing CI/CD pipelines using GitLab, Docker, and Kubernetes to improve deployment frequency by 30% and enhance the platform’s resilience under peak load.",
      "Refined monitoring and alerting frameworks by enhancing Prometheus, Grafana, and Splunk integrations. These improvements reduced mean time to recovery (MTTR) by 40% and supported more proactive, data-driven troubleshooting.",
      "Streamlined Oracle Flexcube database operations by improving query performance and operational efficiencies, enabling faster, data-informed decision-making across the organization."
    ],
    technologies: [
      "Oracle Flexcube",
      "Nextra",
      "Java",
      "Python",
      "Next.js",
      "TypeScript",
      "AWS",
    ],
    website: "https://nfcbank.com/", // Replace with actual URL if available
  },
  {
    company: "CloudOpex",
    logo: "/logos/cloudopex.png",
    position: "Fullstack Developer",
    duration: "03/2023 - 11/2023",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Developed and optimized Nest.js API endpoints for the Nimbus project, enhancing backend responsiveness and ensuring seamless integration with the frontend.",
      "Streamlined continuous integration and delivery workflows by leveraging GitHub Actions and AWS-based infrastructure. This approach reduced code-to-production lead times by over 60% and enabled multiple daily deployments.",
      "Deployed and managed AWS resources (RDS, ECS, and Docker) to improve system scalability, stability, and reliability.",
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
    duration: "03/2022 - 06/2023",
    location: "Douala, Cameroon",
    responsibilities: [
      "Designed and delivered a full-stack blood bank management system (Python-Django backend, Next.js frontend) for the Gyneco-Obstetric and Pediatric Hospital of Douala (HGOPED).",
      "Improved blood inventory retrieval speeds by 30% and boosted overall operational efficiency by 25%.",
      "Deployed and monitored the application using Docker, GitHub Actions, DigitalOcean, and Vercel."
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
    duration: "01/2021 - 03/2022",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Developed frontend components for the Saint-Barth and UMJ platforms using React and Next.js, reducing page load times by 20% and enhancing user experience.",
      "Built and optimized backend microservices with TypeScript and Nest.js, improving system responsiveness by 30% and enabling seamless handling of 10,000+ daily reservations.",
      "Implemented WebSockets for real-time schedule updates in the UMJ platform, reducing synchronization delays by 40% and increasing staff scheduling accuracy by 25%."
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
  {
    company: "GROUPE SIA",
    logo: "/logos/wizestack.png",
    position: "Software Engineering Intern",
    duration: "06/2020 - 12/2020",
    location: "Yaoundé, Cameroon",
    responsibilities: [
      "Developed and customized Odoo modules using Python to enhance functionalities for E-Commerce and other business operations, improving system efficiency and client satisfaction.",
      "Integrated and extended Odoo’s modular ERP framework to align with specific customer requirements, demonstrating proficiency in Python and database management.",
      "Collaborated with senior developers to debug, optimize, and deploy solutions, gaining hands-on experience in Odoo’s architecture and real-world application development. "
    ],
    technologies: [
      "TypeScript",
      "Python",
      "Odoo",
      "Docker"
    ],
    website: "https://groupesia.com/en_US/",
  },
];
