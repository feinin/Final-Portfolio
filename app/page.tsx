import SkillGraph from "@/components/SkillGraph";

const traceLog = [
  {
    step: "01",
    role: "Full-Stack Software Engineer",
    org: "Aditi Consulting",
    period: "04/2024 - 08/2024",
    delta:
      "Built and maintained full-stack features across React front ends and Python/Node back ends for client projects.",
  },
  {
    step: "00",
    role: "Full-Stack Software Engineer Intern",
    org: "Voodies",
    period: "10/2023 - 01/2024",
    delta:
      "Helped build a Flutter-based cross-platform mobile app for sharing short video restaurant reviews, improving video playback performance.",
  },
];

const projects = [
  {
    name: "E-Commerce Clothing",
    stack: "React · Node · Express",
    blurb:
      "A scalable React/Node.js e-commerce platform with Stripe payments and Redis-cached queries that cut response times.",
  },
  {
    name: "Grub Truck",
    stack: "Node.js · Express · PostgreSQL",
    blurb:
      "A restaurant discovery app with a MongoDB-backed listings/reviews schema and geolocation search for finding nearby dining options by distance.",
  },
  {
    name: "Real-Time Crypto",
    stack: "React · TypeScript · FastAPI",
    blurb:
      "A responsive React dashboard with JWT-authenticated portfolio tracking and live, real-time charts of cryptocurrency prices and volume pulled from CoinGecko and Binance.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink bg-grid-paper bg-grid-sm bg-[position:-1px_-1px]">
      {/* subtle vignette so the grid doesn't fight the content */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,17,21,0)_0%,rgba(15,17,21,0.85)_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Nav */}
        <header className="flex items-center justify-between py-8">
          <span className="font-mono text-sm text-muted">
            kenan<span className="text-teal">.</span>kong
          </span>
          <nav className="flex gap-6 font-mono text-sm text-muted">
            <a href="#work" className="focus-ring hover:text-paper transition-colors">
              experience
            </a>
            <a href="#projects" className="focus-ring hover:text-paper transition-colors">
              projects
            </a>
            <a href="#contact" className="focus-ring hover:text-paper transition-colors">
              contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid gap-10 py-16 md:grid-cols-[1.1fr,1fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 font-mono text-sm text-teal">
              full-stack software engineer · long beach, ca
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-paper md:text-5xl">
              I build things by mapping how the pieces connect.
            </h1>
            <p className="mt-6 max-w-md text-muted">
              Full-stack engineer working across React, TypeScript, Python,
              and PostgreSQL. I think in diagrams and traces before I write a
              line of code — this page's graph isn't just decoration, it's
              roughly how I keep the whole stack in my head.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="focus-ring rounded-sm border border-teal px-5 py-2.5 font-mono text-sm text-teal transition-colors hover:bg-teal hover:text-ink"
              >
                get in touch
              </a>
              <a
                href="#projects"
                className="focus-ring rounded-sm border border-grid px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-paper"
              >
                see projects
              </a>
            </div>
          </div>
          <SkillGraph />
        </section>

        {/* Experience — trace table */}
        <section id="work" className="py-16 md:py-24">
          <h2 className="font-display text-2xl font-bold text-paper">
            Experience
          </h2>
          <p className="mt-2 font-mono text-xs text-muted">
          
          </p>

          <div className="mt-8 overflow-hidden rounded-sm border border-grid">
            <div className="grid grid-cols-[3rem,1fr,1fr,auto] gap-4 border-b border-grid bg-surface px-4 py-3 font-mono text-xs uppercase tracking-wide text-muted">
              <span>step</span>
              <span>role</span>
              <span>organization</span>
              <span>period</span>
            </div>
            {traceLog.map((row) => (
              <div
                key={row.step}
                className="grid grid-cols-[3rem,1fr,1fr,auto] gap-4 border-b border-grid px-4 py-4 last:border-b-0 hover:bg-surface2 transition-colors"
              >
                <span className="font-mono text-sm text-teal">{row.step}</span>
                <div>
                  <p className="text-paper">{row.role}</p>
                  <p className="mt-1 text-sm text-muted">{row.delta}</p>
                </div>
                <span className="self-start text-sm text-muted">{row.org}</span>
                <span className="self-start whitespace-nowrap font-mono text-xs text-muted">
                  {row.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-24">
          <h2 className="font-display text-2xl font-bold text-paper">
            Projects
          </h2>
          <p className="mt-2 text-sm text-muted">
            
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-sm border border-grid bg-surface p-5 transition-colors hover:border-teal/50"
              >
                <h3 className="font-display text-lg font-bold text-paper">
                  {p.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-teal">{p.stack}</p>
                <p className="mt-3 text-sm text-muted">{p.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24">
          <h2 className="font-display text-2xl font-bold text-paper">
            Let's talk
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Open to full-stack roles. The fastest way to reach me is email —
            I'll add my real links here.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="mailto:your.email@example.com"
              className="focus-ring text-teal hover:underline"
            >
              kongkenan@gmail.com
            </a>
            <a
              href="https://github.com/feinin"
              className="focus-ring text-muted hover:text-paper"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/kongkenan"
              className="focus-ring text-muted hover:text-paper"
            >
              linkedin
            </a>
          </div>
        </section>

        <footer className="border-t border-grid py-8 font-mono text-xs text-muted">
          Kenan Kong — built with Next.js &amp; Tailwind
        </footer>
      </div>
    </main>
  );
}
