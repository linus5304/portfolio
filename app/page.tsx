import Image from "next/image";
import { socialLinks } from "./config";
import { Button, buttonVariants } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { ProjectList } from "./projects/project-list";
import { SkillsList } from "./components/skills/skill-list";
import ExperienceList from "./components/experiece/experience-list";
import { Button_v2 } from "./components/button-shine";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6 max-xl:flex-col-reverse">
          <div>
            <h1 className="mb-8 text-lg font-medium tracking-tight">
              Linus Bayere – Software Engineer & DevOps Specialist
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
              <p>
                Hi, I am Linus. I build cool stuffs with great tools.
              </p>
            </div>
            <Link href="/projects">
              <Button_v2 className="">
                <div className="flex items-center justify-between">
                  <span>View my work</span> <ArrowRight />
                </div>
              </Button_v2>
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
          <h1 className="text-lg font-medium tracking-tight">Projects</h1>
          <ProjectList />
        </div>

        <div>
          <h1 className="mb-6 text-lg font-medium tracking-tight">Skills</h1>
          <SkillsList />
        </div>
        <div>
          <h1 className="mb-6 text-lg font-medium tracking-tight">
            Experience
          </h1>
          <ExperienceList />
        </div>
      </div>
    </section>
  );
}
