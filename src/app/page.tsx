import BadgeLink from "@/components/BadgeLink";
import RollWrapper from "@/components/RollWrapper";
import { ICON_SIZE, SKILLS, PROJECTS } from "@/config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="space-y-4 text-lg">
        <h1 className="py-32 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          {"<👋 HELLO WORLD />"}
        </h1>

        <p>
          My name is Felipe Cardoso, and I am a full stack developer
          specializing in web development. I enjoy creating both new and classic
          projects, like this portfolio with a blog—so{" "}
          <span className="font-bold">✨ O L D S C H O O L ✨</span>! Humor
          aside, I am passionate about building a wide range of applications to
          expand my knowledge and continually challenge myself.
        </p>
        <p>
          Currently, I lead the software development team at{" "}
          <BadgeLink href="https://www.jeanpiaget.g12.br/">
            Jean Piaget
          </BadgeLink>
          , where I develop tools and apps to support students in their studies
          and assist staff in their work. I primarily work with{" "}
          <BadgeLink href="https://www.typescriptlang.org/">
            TypeScript
          </BadgeLink>{" "}
          and
          <BadgeLink href="https://react.dev/">React</BadgeLink>, managing a
          dedicated team to deliver impactful solutions.
        </p>
      </section>

      <section>
        <h2 className="text-center text-4xl font-bold">Skills</h2>
        <div className="pt-32 lg:pb-24 xl:pb-32">
          <RollWrapper>
            {SKILLS.map((skill) => (
              <skill.icon
                key={`skill-${skill.title}`}
                title={skill.title}
                size={ICON_SIZE.EXTRA_LARGE}
              />
            ))}
          </RollWrapper>
        </div>
      </section>

      <section className="flex flex-col items-center gap-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={`project-${project.title}`}
              href={project.repository}
              target="_blank"
              className="flex flex-col gap-4 rounded border p-4 transition-transform md:hover:scale-105"
            >
              <p className="text-center text-lg font-bold">{project.title}</p>
              <div className="relative aspect-video w-full overflow-hidden rounded bg-neutral-800">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`project ${project.title} preview image`}
                    fill
                  />
                )}
              </div>
              <p className="text-neutral-400">{project.description}</p>
              <div className="flex w-full flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p
                    key={`project-${project.title}-tag-${tag}`}
                    className="flex-1 rounded border p-1 text-center text-xs"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <Link
          className="text-neutral-500 underline hover:text-neutral-400"
          target="_blank"
          href="https://github.com/imLymei?tab=repositories"
        >
          See more {"->"}
        </Link>
      </section>
    </div>
  );
}
