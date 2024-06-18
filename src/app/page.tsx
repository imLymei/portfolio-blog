export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="py-24 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          {"<👋 HELLO WORLD />"}
        </h1>

        <p className="text-lg">
          My name is Felipe Cardoso and I am a full stack developer focused on
          web development who likes to build new and old things, just like this
          portfolio with a blog! So{" "}
          <span className="font-semibold">✨O L D S C H O O L✨</span>!
        </p>

        <p className="text-lg">
          Jokes aside, I like to build everything that exists to expand my
          knowledge and try to create new things to challenge myself.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold">Skills</h2>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Database Management (MySQL, MongoDB)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>API Development and Integration</li>
          <li>Unit and Integration Testing</li>
        </ul>
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

      <section>
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out to me for any inquiries or opportunities. You
          can contact me via email at{" "}
          <a
            href="mailto:felipe@example.com"
            className="text-blue-600 underline"
          >
            felipe@example.com
          </a>{" "}
          or connect with me on LinkedIn.
        </p>
      </section>
    </div>
  );
}
