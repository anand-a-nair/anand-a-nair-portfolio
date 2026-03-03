const caseStudies = [
  {
    title: "High-scale Data Processing",
    summary:
      "Reduced holdings computation runtime from ~4 hours to ~1.5 hours by moving workloads to Polars and optimizing pipelines.",
  },
  {
    title: "Release Engineering",
    summary:
      "Designed standardized CI/CD templates and Docker workflows, cutting production release cycles from hours to minutes.",
  },
  {
    title: "AI in Production",
    summary:
      "Built and deployed LLM-assisted market communication tools and FX forecasting workflows used by internal teams.",
  },
];

const logos = ["BNY", "NIT Trichy", "iDatalytics", "Angular", "Python"];

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <nav className="top-nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#recent-work">Recent Work</a>
        <a href="#contact">Get In Touch</a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Full-Stack Developer</p>
          <h1>Anand A Nair</h1>
          <p>
            I build data-heavy products for global markets with a focus on
            speed, reliability, and practical AI.
          </p>
          <a className="cta" href="mailto:nair.anand2000@gmail.com">
            Let&apos;s get started
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="avatar">AN</div>
        </div>
      </section>

      <section className="block" id="case-studies">
        <h2>Case Studies</h2>
        <div className="grid">
          {caseStudies.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" id="testimonials">
        <h2>Testimonials</h2>
        <article className="panel quote">
          <p>
            Worked closely with business and engineering teams to deliver faster,
            stable releases and measurable performance gains.
          </p>
        </article>
      </section>

      <section className="block" id="recent-work">
        <h2>Recent Work</h2>
        <article className="panel">
          <p>
            Personal projects will be added here next. This section is kept ready
            for upcoming work.
          </p>
        </article>
      </section>

      <section className="block" id="contact">
        <h2>Worked With</h2>
        <div className="logo-row" role="list" aria-label="Worked with">
          {logos.map((logo) => (
            <div className="logo-card" key={logo} role="listitem">
              {logo}
            </div>
          ))}
        </div>

        <div className="contact-line">
          <a href="mailto:nair.anand2000@gmail.com">nair.anand2000@gmail.com</a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/anandnair28"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/anandnair28"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
