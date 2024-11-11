import Image from "next/image";
import { socialLinks } from "./config";
import { Button, buttonVariants } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { ProjectList } from "./projects/project-list";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div className="flex items-center">
          <div>
            <h1 className="mb-8 text-lg font-medium tracking-tight">
              Linus Phinehas Suh Bayere – Software Engineer & DevOps Specialist
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
              <p>
                Hi, I'm Linus Phinehas Suh Bayere, a passionate Software
                Engineer with over two years of experience in full-stack
                development, cloud computing, and DevOps. I thrive on building
                and deploying scalable applications that drive efficiency and
                performance. I'm eager to contribute to impactful projects and
                continue growing in the tech industry.
              </p>
            </div>
            <Link href="/projects" className={buttonVariants({})}>
              View my work <ArrowRight />
            </Link>
          </div>
          <a href={socialLinks.twitter} target="_blank">
            <Image
              src="/profile.png"
              alt="Profile photo"
              className="block mx-auto mt-0 mb-10 bg-gray-100 rounded-full lg:mt-5 lg:mb-5 sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
        </div>
        <div>
          <h1 className="mb-[-2] text-lg font-medium tracking-tight">
            Projects
          </h1>
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
