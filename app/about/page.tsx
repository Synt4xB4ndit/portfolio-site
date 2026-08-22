import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* Intro */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Hi, I&apos;m Nicholas. I&apos;m a software developer passionate about building clean,
          modern web experiences. I enjoy turning ideas into polished products using
          Full Stack frameworks.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "HTML / CSS",
            "Git",
            "Node.js",
            // Add more as needed
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-full text-sm font-medium border border-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education / Schools */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* BCC */}
          <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                alt="BCC Campus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-white">Diman Regional Vocational Technical High School</h3>
              <p className="text-zinc-400 text-sm mt-1">[Degree / Program] • [Years]</p>
            </div>
          </div>

          {/* School 2 */}
          <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                alt="University Campus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-white">Bristol Community College</h3>
              <p className="text-zinc-400 text-sm mt-1">[Degree / Program] • [Years]</p>
            </div>
          </div>

          {/* Southern New Hampshire University */}
          <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="Southern New Hampshire University campus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium text-white">Southern New Hampshire University</h3>
              <p className="text-zinc-400 text-sm mt-1">
                [Program / Degree] • [Years]
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Accolades */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Accolades</h2>
        <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700 max-w-md">
          <div className="relative h-56">
            {/* Replace with your NSLS photo later */}
            <Image
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
              alt="NSLS recognition"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-medium text-white">National Society of Leadership and Success (NSLS)</h3>
            <p className="text-zinc-400 text-sm mt-1">
              Inducted member • Leadership development program
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Communities */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Clubs & Communities</h2>
        <ul className="space-y-3 text-zinc-300">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">▹</span>
            <span>[Club / Community Name] – [Your role or short description]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">▹</span>
            <span>[Another club or online community]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 mt-1">▹</span>
            <span>[Optional third item]</span>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-white">[Job / Role Title]</h3>
            <p className="text-cyan-400 text-sm">[Company or Project] • [Dates]</p>
            <p className="text-zinc-400 mt-2">
              Short description of what you did and the impact.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">[Another Role or Project]</h3>
            <p className="text-cyan-400 text-sm">[Company / Personal] • [Dates]</p>
            <p className="text-zinc-400 mt-2">
              Another short description.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}