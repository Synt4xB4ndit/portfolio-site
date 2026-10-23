export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-zinc-400 text-lg">
          Feel free to reach out if you&apos;d like to connect or discuss opportunities.
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-4 p-5 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl">
            ✉️
          </div>
          <div>
            <p className="text-sm text-zinc-400">Email</p>
            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
              Namaral1995@gmail.com 
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="github.com/NicSNHU?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl">
            💻
          </div>
          <div>
            <p className="text-sm text-zinc-400">GitHub</p>
            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
              github.com/NicSNHU?tab=repositories
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nicholas-amaral-a47ba8222"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl">
            💼
          </div>
          <div>
            <p className="text-sm text-zinc-400">LinkedIn</p>
            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
              https://www.linkedin.com/in/nicholas-amaral-a47ba8222
            </p>
          </div>
        </a>

        {/* Optional: X / Twitter */}
        {/* 
        <a
          href="https://x.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl">
            🐦
          </div>
          <div>
            <p className="text-sm text-zinc-400">X (Twitter)</p>
            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
              x.com/yourusername
            </p>
          </div>
        </a>
        */}
      </div>
    </div>
  );
}