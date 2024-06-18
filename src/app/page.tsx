import RollWrapper from "@/components/RollWrapper";
import { ICON_SIZE } from "@/config";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section>
        <h1 className="py-24 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          {"<👋 HELLO WORLD />"}
        </h1>

        <p className="text-lg">
          My name is Felipe Cardoso and I am a full stack developer focused on
          web development who likes to build new and old things, just like this
          portfolio with a blog! So{" "}
          <span className="font-bold">✨ O L D S C H O O L ✨</span>! Jokes
          aside, I like to build everything that exists to expand my knowledge
          and try to create new things to challenge myself.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="pt-32 lg:pb-24 xl:pb-32">
          <RollWrapper>
            <BiLogoTypescript title="Typescript" size={ICON_SIZE.EXTRA_LARGE} />
            <FaNodeJs title="Node.js" size={ICON_SIZE.EXTRA_LARGE} />
            <RiNextjsFill title="Next.js" size={ICON_SIZE.EXTRA_LARGE} />
            <RiTailwindCssFill
              title="Tailwind CSS"
              size={ICON_SIZE.EXTRA_LARGE}
            />
            <FaDatabase
              title="Database Management"
              size={ICON_SIZE.EXTRA_LARGE}
            />
            <FaGitAlt title="Git" size={ICON_SIZE.EXTRA_LARGE} />
            <FaPython title="Python" size={ICON_SIZE.EXTRA_LARGE} />
            <TbBrandCSharp title="C#" size={ICON_SIZE.EXTRA_LARGE} />
            <FaAws title="AWS" size={ICON_SIZE.EXTRA_LARGE} />
          </RollWrapper>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4 shadow-md">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-600">
              A brief description of your first project. Highlight the
              technologies used and the problem it solves.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-md">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="mt-2 text-gray-600">
              A brief description of your second project. Highlight the
              technologies used and the problem it solves.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-md">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">
              A brief description of your third project. Highlight the
              technologies used and the problem it solves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
