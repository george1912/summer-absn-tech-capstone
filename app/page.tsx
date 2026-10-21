"use client";

import { useState } from "react";

type Project = {
  name: string;
  eyebrow: string;
  status: string;
  problem: string;
  solution: string;
  preview: "concept" | "critical" | "sync" | "study" | "typhon" | "fox";
  primaryLabel: string;
  primaryHref: string;
  sourceHref?: string;
};

const portfolio: Project[] = [
  {
    name: "Brightspace Sync",
    eyebrow: "Course files",
    status: "Mac app",
    problem: "Course files are scattered across folders and formats.",
    solution: "Syncs current files locally and creates missing PDFs.",
    preview: "sync",
    primaryLabel: "Open landing page",
    primaryHref: "https://george1912.github.io/brightspace-sync/",
    sourceHref: "https://github.com/george1912/brightspace-sync",
  },
  {
    name: "Concept Map Builder",
    eyebrow: "Clinical documents",
    status: "Web app",
    problem: "Concept-map formatting delays the written work.",
    solution: "Moves a Typhon case log into an editable draft and flags missing fields.",
    preview: "concept",
    primaryLabel: "Try the live app",
    primaryHref: "https://george1912.github.io/concept-map-builder/",
    sourceHref: "https://github.com/george1912/concept-map-builder",
  },
  {
    name: "Critical Points Machine",
    eyebrow: "ATI remediation",
    status: "Web app",
    problem: "ATI headings must be copied into three worksheets.",
    solution: "Formats the headings; the student writes every critical point.",
    preview: "critical",
    primaryLabel: "Try the live app",
    primaryHref: "https://george1912.github.io/critical-points-machine/",
    sourceHref: "https://github.com/george1912/critical-points-machine",
  },
  {
    name: "Typhon Form Filler",
    eyebrow: "Clinical logs",
    status: "Prototype",
    problem: "Routine selections repeat across long Typhon forms.",
    solution: "Reuses saved selections to speed entry. It never generates clinical information.",
    preview: "typhon",
    primaryLabel: "View source archive",
    primaryHref: "https://github.com/george1912/typhon-case-filler-archive",
  },
  {
    name: "Pediatrics Nursing Guide",
    eyebrow: "Study guide",
    status: "Web guide",
    problem: "A long pediatric review outline is hard to scan.",
    solution: "Organizes it into 10 sections and 95 topics for direct review.",
    preview: "study",
    primaryLabel: "Try the live guide",
    primaryHref: "https://george1912.github.io/pediatrics-nursing-web-guide/",
    sourceHref: "https://github.com/george1912/pediatrics-nursing-web-guide",
  },
  {
    name: "Fox Timer",
    eyebrow: "Study focus / ATI",
    status: "Chrome extension",
    problem: "ATI pages can time out while you read or take notes.",
    solution: "Keeps the session awake for a set time and shows study tips.",
    preview: "fox",
    primaryLabel: "Open landing page",
    primaryHref: "https://george1912.github.io/fox-timer/",
  },
];

const goals = [
  {
    name: "Access files",
    goal: "Keep course files in one place.",
  },
  {
    name: "Format documents",
    goal: "Start from an editable draft.",
  },
  {
    name: "Reduce input",
    goal: "Reuse routine selections.",
  },
  {
    name: "Protect study time",
    goal: "Keep attention on learning.",
  },
];

const patientFacts = [
  ["Blood pressure", "88/54 mmHg"],
  ["Heart rate", "112 bpm"],
  ["Urine output", "20 mL/hr"],
  ["Patient report", "Dizzy on standing"],
];

function ProductPreview({ type }: { type: Project["preview"] }) {
  if (type === "typhon") {
    return (
      <figure className="real-product-preview repository-preview">
        <iframe title="Typhon Form Filler repository popup" src="./previews/typhon-popup.html" />
        <figcaption>Form-filling extension interface</figcaption>
      </figure>
    );
  }

  if (type === "fox") {
    return (
      <figure className="real-product-preview live-site-preview">
        <iframe
          title="Fox Timer live landing page"
          src="https://george1912.github.io/fox-timer/"
          loading="lazy"
        />
        <figcaption>Live landing page</figcaption>
      </figure>
    );
  }

  const previews = {
    sync: {
      src: "./previews/brightspace-sync.png",
      alt: "Brightspace Sync landing page showing the Mac download and course-file workflow",
    },
    concept: {
      src: "./previews/concept-map-builder.png",
      alt: "Concept Map Builder showing the Typhon case-log guide and four-step workflow",
    },
    critical: {
      src: "./previews/critical-points.png",
      alt: "Critical Points Machine showing the worksheet formatter and sample report workflow",
    },
    study: {
      src: "./previews/pediatrics-guide.png",
      alt: "Pediatrics Nursing Web Guide showing chapter and clinical-topic navigation",
    },
  } as const;
  const preview = previews[type];

  return (
    <figure className="real-product-preview">
      <img src={preview.src} alt={preview.alt} />
      <figcaption>Live interface capture</figcaption>
    </figure>
  );
}

export default function Home() {
  const [organized, setOrganized] = useState(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#opening">Workflow Tools / Faculty Meeting</a>
        <div className="nav-links">
          {[
            ["Tools", "portfolio"],
            ["Demo", "demonstration"],
          ].map(([label, section]) => (
            <a key={section} href={"#" + section}>{label}</a>
          ))}
        </div>
      </nav>

      <section className="hero clinical-hero" id="opening">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Nursing workflow portfolio</p>
          <h1>Small tools.<br /><em>Less friction.</em></h1>
          <p className="hero-lede">Six tools for files, forms, clinical input, and study focus.</p>
          <div className="hero-actions">
            <a className="primary-link" href="#portfolio">View the tools <span>↓</span></a>
          </div>
        </div>

        <div className="clinical-console" aria-label="Chronological goals">
          <header>
            <div><span className="console-kicker">The goal</span><strong>Files → forms → input → focus</strong></div>
            <span className="status-chip"><i></i> Four steps</span>
          </header>
          <div className="console-screen goal-console">
            {goals.map((item, index) => (
              <div className="console-goal" key={item.name}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div><strong>{item.name}</strong><span>{item.goal}</span></div>
              </div>
            ))}
          </div>
          <footer><span>Six tools</span><b>More time to study</b></footer>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <header className="section-heading">
          <p className="section-index">02 / Tools</p>
          <h2>Problem.<br />Tool.</h2>
          <p>Open a live tool or its source.</p>
        </header>

        <div className="project-grid">
          {portfolio.map((project, index) => (
            <article className="project-card" key={project.name}>
              <header className="project-heading">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div><span>{project.eyebrow}</span><h3>{project.name}</h3></div>
                <i>{project.status}</i>
              </header>
              <div className="project-body">
                <div className="project-screen">
                  <div className="screen-label"><span>Interface preview</span><b>{project.status}</b></div>
                  <ProductPreview type={project.preview} />
                </div>
                <div className="project-copy">
                  <div className="problem-solution">
                    <div><b>Problem</b><p>{project.problem}</p></div>
                    <div><b>Tool</b><p>{project.solution}</p></div>
                  </div>
                  <div className="project-actions">
                    <a className="launch-button" href={project.primaryHref} target="_blank" rel="noreferrer">
                      {project.primaryLabel}<span>↗</span>
                    </a>
                    {project.sourceHref && (
                      <a className="source-button" href={project.sourceHref} target="_blank" rel="noreferrer">
                        View source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section demo-section" id="demonstration">
        <header className="section-heading light">
          <p className="section-index">03 / Demo</p>
          <h2>Input →<br />organized draft.</h2>
          <p>Facts are grouped. Judgment stays with the student.</p>
        </header>

        <div className="demo-shell">
          <div className="demo-toolbar">
            <div><span className="demo-dot"></span><p>Clinical-data organizer</p></div>
            <span className="privacy-pill">Fictional data</span>
          </div>
          <div className="demo-grid">
            <div className="demo-input">
              <div className="demo-column-heading"><span>Input / 04 facts</span><strong>Case facts</strong></div>
              <div className="fact-list">
                {patientFacts.map(([label, value]) => (
                  <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
              <button className="organize-button" onClick={() => setOrganized(true)} disabled={organized}>
                {organized ? "Organization complete" : "Organize this sample"}<span>{organized ? "✓" : "→"}</span>
              </button>
            </div>

            <div className="demo-output" aria-live="polite">
              <div className="demo-column-heading">
                <span>Output / Review state</span>
                <strong>{organized ? "Three evidence groups" : "Awaiting organization"}</strong>
              </div>
              {!organized ? (
                <div className="waiting-state">
                  <div><span></span><span></span><span></span></div>
                  <p>Ready to organize.</p>
                </div>
              ) : (
                <div className="organized-state">
                  <article><span>Hemodynamics</span><p>BP 88/54 mmHg · HR 112 bpm</p></article>
                  <article><span>Fluid status</span><p>Urine output 20 mL/hr</p></article>
                  <article><span>Symptoms</span><p>Dizzy on standing</p></article>
                </div>
              )}
              <div className={organized ? "judgment-gate revealed" : "judgment-gate"}>
                <div><span>Nursing priority</span><p>{organized ? "Student entry required…" : "—"}</p></div>
                <b>Student decision</b>
              </div>
            </div>
          </div>
          <footer className="demo-stop">
            <span>STOP</span>
            <div><strong>Organization ends here.</strong></div>
            {organized && <button onClick={() => setOrganized(false)}>Reset</button>}
          </footer>
        </div>
      </section>
      <section className="section final-section compact-final">
        <footer className="site-footer">
          <p>Faculty Meeting</p>
          <a href="#opening">Return to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
