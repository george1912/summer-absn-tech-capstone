"use client";

import { useState } from "react";

type Project = {
  name: string;
  eyebrow: string;
  status: string;
  problem: string;
  solution: string;
  limit: string;
  preview: "concept" | "critical" | "sync" | "study" | "typhon";
  primaryLabel: string;
  primaryHref: string;
  sourceHref?: string;
  featured?: boolean;
};

const portfolio: Project[] = [
  {
    name: "Typhon Case Filler",
    eyebrow: "Workflow / Repeated input",
    status: "Core prototype",
    problem:
      "Typhon requires the same routine selections across long clinical-log forms.",
    solution:
      "The extension applies user-selected presets, then leaves case-specific entries for review.",
    limit:
      "The user verifies every case-specific entry.",
    preview: "typhon",
    primaryLabel: "View source archive",
    primaryHref: "https://github.com/george1912/typhon-case-filler-archive",
    featured: true,
  },
  {
    name: "Concept Map Builder",
    eyebrow: "Workflow / Clinical documentation",
    status: "Live web app",
    problem:
      "The same case information has to be moved into a rigid concept-map PDF, then reformatted field by field.",
    solution:
      "Upload a Typhon case log. The app fills a draft, marks missing or uncertain fields, and exports the reviewed map.",
    limit:
      "Every field stays editable. Nursing priorities can be left blank for the student.",
    preview: "concept",
    primaryLabel: "Try the live app",
    primaryHref: "https://george1912.github.io/concept-map-builder/",
    sourceHref: "https://github.com/george1912/concept-map-builder",
  },
  {
    name: "Critical Points Machine",
    eyebrow: "Workflow / ATI remediation",
    status: "Live web app",
    problem:
      "ATI report headings must be copied into three separate remediation worksheets before the written work begins.",
    solution:
      "Upload the ATI report. The app formats Category, Sub Concept, and Content into all three worksheets.",
    limit:
      "The student writes every critical point.",
    preview: "critical",
    primaryLabel: "Try the live app",
    primaryHref: "https://george1912.github.io/critical-points-machine/",
    sourceHref: "https://github.com/george1912/critical-points-machine",
    featured: true,
  },
  {
    name: "Brightspace Sync",
    eyebrow: "Information / Course files",
    status: "Mac app + landing page",
    problem:
      "Course files are spread across Brightspace folders and formats, with repeated downloading and conversion.",
    solution:
      "One update pulls current course content into a local folder, skips unchanged files, and makes missing PDFs.",
    limit:
      "The app does not summarize or prioritize course content.",
    preview: "sync",
    primaryLabel: "Open landing page",
    primaryHref: "https://george1912.github.io/brightspace-sync/",
    sourceHref: "https://github.com/george1912/brightspace-sync",
  },
  {
    name: "Pediatrics Nursing Guide",
    eyebrow: "Information / Study structure",
    status: "Live study guide",
    problem:
      "A long cumulative pediatric review outline is difficult to scan and use as a focused reading tool.",
    solution:
      "The guide organizes the material into 10 sections and 95 clinical topics with a direct reading view.",
    limit:
      "It structures the source material; it does not test mastery.",
    preview: "study",
    primaryLabel: "Try the live guide",
    primaryHref: "https://george1912.github.io/pediatrics-nursing-web-guide/",
    sourceHref: "https://github.com/george1912/pediatrics-nursing-web-guide",
  },
];

const goals = [
  {
    name: "Typhon input",
    problem: "Repeated selections in long clinical-log forms.",
    goal: "Reduce routine data entry while keeping case details visible for review.",
  },
  {
    name: "Concept Map + Critical Points",
    problem: "Required information has to be reformatted into rigid documents.",
    goal: "Save time formatting documents so the written work can begin sooner.",
  },
  {
    name: "File Sync",
    problem: "Course information is spread across folders and file formats.",
    goal: "Collect and organize course information in one dependable local folder.",
  },
];

const patientFacts = [
  ["Blood pressure", "88/54 mmHg"],
  ["Heart rate", "112 bpm"],
  ["Urine output", "20 mL/hr"],
  ["Patient report", "Dizzy on standing"],
];

function ProductPreview({ type }: { type: Project["preview"] }) {
  if (type === "concept") {
    return (
      <div className="product-preview concept-preview" aria-hidden="true">
        <div className="preview-bar"><b>CONCEPT MAP BUILDER</b><span>Split · Vertical</span></div>
        <div className="concept-steps">
          <span className="done">1 <i>Student</i></span>
          <span className="active">2 <i>Case intake</i></span>
          <span>3 <i>Review</i></span>
          <span>4 <i>Export</i></span>
        </div>
        <div className="concept-body">
          <div className="upload-block"><small>Typhon case log</small><strong>Upload Case PDF</strong><button>Upload</button></div>
          <div className="flag-list">
            <span><b>Allergies</b><i>Verify</i></span>
            <span><b>Edema</b><i>Missing</i></span>
            <span><b>Medication</b><i>Review</i></span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "critical") {
    return (
      <div className="product-preview critical-preview" aria-hidden="true">
        <div className="preview-bar"><b>CRITICAL POINTS MACHINE</b><span>Live web app</span></div>
        <div className="critical-body">
          <div><small>Worksheet</small><h4>Formatter</h4><p>Report headers into the form. Your critical points stay yours.</p></div>
          <div className="critical-upload"><span>ATI REPORT PDF</span><b>Drop report here</b><button>Fill headers from report</button></div>
        </div>
      </div>
    );
  }

  if (type === "sync") {
    return (
      <div className="product-preview sync-preview" aria-hidden="true">
        <div className="mac-toolbar"><i></i><i></i><i></i><b>Brightspace Sync</b></div>
        <div className="sync-body">
          <aside><strong>Overview</strong><span>Courses</span><span>PDF tools</span><span>Settings</span></aside>
          <div>
            <small>SYNCED COURSES</small><h4>Everything current.</h4>
            <div className="course-row"><span>NRBS 4010</span><b>Up to date</b></div>
            <div className="course-row"><span>NRBS 3410</span><b>3 new files</b></div>
            <button>Update my classes</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === "study") {
    return (
      <div className="product-preview study-preview" aria-hidden="true">
        <div className="preview-bar"><b>PEDIATRICS NURSING GUIDE</b><span>10 sections · 95 topics</span></div>
        <div className="study-body">
          <div className="chapter"><small>CHAPTER 45</small><strong>GI Disorders</strong><span>14 ready · 14 total</span></div>
          <div className="topics">
            {["Fluid volume", "Acid-base", "Pyloric stenosis", "Intussusception"].map((topic) => (
              <span key={topic}>{topic}<i>Content ready</i></span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-preview typhon-preview" aria-hidden="true">
      <div className="preview-bar"><b>TYPHON CASE FILLER</b><span>Connected</span></div>
      <div className="typhon-body">
        <small>QUICK START PRESET</small>
        {["Student role", "Clinical setting", "Procedures", "Medication review"].map((item, index) => (
          <span key={item}><i className={index < 3 ? "checked" : ""}></i>{item}<b>{index < 3 ? "Selected" : "Review"}</b></span>
        ))}
        <button>Apply selected fields</button>
      </div>
    </div>
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
            ["Work", "portfolio"],
            ["Time saved", "goals"],
            ["Demo", "demonstration"],
          ].map(([label, section]) => (
            <a key={section} href={"#" + section}>{label}</a>
          ))}
        </div>
      </nav>

      <section className="hero clinical-hero" id="opening">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Nursing workflow tools</p>
          <h1>Repeated work.<br /><em>Less time.</em></h1>
          <p className="hero-lede">
            Five tools that reduce repeated input, document formatting, and
            course-file organization.
          </p>
          <div className="meeting-context">
            <span>Time saved</span>
            <p>
              Time saved on repetitive work created room to build study tools,
              then connect them through clear landing pages.
            </p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#portfolio">View the projects <span>↓</span></a>
            <a className="secondary-link" href="#goals">See the goals</a>
          </div>
        </div>

        <div className="clinical-console" aria-label="Selected project portfolio">
          <header>
            <div><span className="console-kicker">Project index</span><strong>Problem / solution review</strong></div>
            <span className="status-chip"><i></i> Ready to open</span>
          </header>
          <div className="console-screen">
            <div className="console-grid"><span>Project</span><span>Problem addressed</span><span>Access</span></div>
            {portfolio.slice(0, 4).map((project) => (
              <a href={project.primaryHref} key={project.name} target="_blank" rel="noreferrer">
                <div><small>{project.eyebrow.split(" / ")[0]}</small><strong>{project.name}</strong></div>
                <span>{project.problem}</span>
                <b>{project.primaryLabel} ↗</b>
              </a>
            ))}
          </div>
          <footer><span>Direct access to apps, pages, and source</span><b>04 shown</b></footer>
        </div>

        <div className="hero-proof">
          <span><strong>Input</strong> Typhon</span>
          <span><strong>Formatting</strong> Concept maps + critical points</span>
          <span><strong>Information</strong> File sync + study guides</span>
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <header className="section-heading">
          <p className="section-index">02 / Work</p>
          <h2>Problem.<br />Solved.</h2>
          <p>
            The screen previews match the real tools. The blue button opens the
            live app or its faculty-facing landing page.
          </p>
        </header>

        <div className="project-grid">
          {portfolio.map((project) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
              <div className="project-screen">
                <div className="screen-label"><span>Interface preview</span><b>{project.status}</b></div>
                <ProductPreview type={project.preview} />
              </div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.eyebrow}</span><i>{project.status}</i></div>
                <h3>{project.name}</h3>
                <div className="problem-solution">
                  <div><b>Problem</b><p>{project.problem}</p></div>
                  <div><b>Solution</b><p>{project.solution}</p></div>
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
            </article>
          ))}
        </div>
      </section>

      <section className="section evolution-section" id="goals">
        <header className="section-heading">
          <p className="section-index">03 / Time saved</p>
          <h2>Recurring tasks.<br />Specific goals.</h2>
          <p>
            The goal is simple: spend less time moving and formatting information.
          </p>
        </header>

        <div className="goal-grid">
          {goals.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.name}</h3>
              <p>{item.problem}</p>
              <strong>{item.goal}</strong>
            </article>
          ))}
        </div>
        <p className="time-result">Saved time made room for study tools. The next step was connecting each tool to a clear page where it can be opened directly.</p>
      </section>

      <section className="section demo-section" id="demonstration">
        <header className="section-heading light">
          <p className="section-index">04 / Demo</p>
          <h2>Input →<br />organized draft.</h2>
          <p>
            The tool groups supplied facts. The student decides what they mean.
          </p>
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
            <div><strong>Organization ends here.</strong><p>Judgment stays with the student.</p></div>
            {organized && <button onClick={() => setOrganized(false)}>Reset</button>}
          </footer>
        </div>
      </section>
      <section className="section final-section">
        <div className="final-actions">
          <div><span className="section-index">Direct access</span><h3>Open the tools.</h3></div>
          <div>
            <a href="https://github.com/george1912/typhon-case-filler-archive" target="_blank" rel="noreferrer">Typhon source ↗</a>
            <a href="https://george1912.github.io/concept-map-builder/" target="_blank" rel="noreferrer">Concept Map Builder ↗</a>
            <a href="https://george1912.github.io/critical-points-machine/" target="_blank" rel="noreferrer">Critical Points ↗</a>
            <a href="https://george1912.github.io/brightspace-sync/" target="_blank" rel="noreferrer">Brightspace Sync ↗</a>
          </div>
        </div>

        <footer className="site-footer">
          <p>Faculty Meeting</p>
          <a href="#opening">Return to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
