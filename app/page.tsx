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
    name: "Access files",
    problem: "Course information is spread across Brightspace folders and file formats.",
    goal: "Bring current files and PDFs into one organized local folder.",
  },
  {
    name: "Reduce formatting time",
    problem: "Concept maps and critical-points worksheets require repeated formatting.",
    goal: "Move existing information into the required forms so the written work starts sooner.",
  },
  {
    name: "Reduce input time",
    problem: "Routine clinical-log selections repeat across long forms.",
    goal: "Apply saved selections, then review the case-specific information.",
  },
  {
    name: "Study time",
    problem: "File handling, formatting, and repeated entry consume study time.",
    goal: "Use the recovered time for reading, practice questions, and review.",
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
            ["Goals", "goals"],
            ["Projects", "portfolio"],
            ["Demo", "demonstration"],
          ].map(([label, section]) => (
            <a key={section} href={"#" + section}>{label}</a>
          ))}
        </div>
      </nav>

      <section className="hero clinical-hero" id="opening">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Nursing workflow tools</p>
          <h1>Workflow tools.<br /><em>Built for nursing.</em></h1>
          <p className="hero-lede">
            Five tools for accessing files, formatting required documents,
            entering clinical logs, and organizing study material.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#goals">Follow the goals <span>↓</span></a>
            <a className="secondary-link" href="#portfolio">View the projects</a>
          </div>
        </div>

        <div className="clinical-console" aria-label="Chronological goals">
          <header>
            <div><span className="console-kicker">The sequence</span><strong>Files → formatting → input → study</strong></div>
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
          <footer><span>Three workflow changes</span><b>One outcome</b></footer>
        </div>

        <div className="hero-proof">
          <span><strong>Information</strong> File sync + study guides</span>
          <span><strong>Formatting</strong> Concept maps + critical points</span>
          <span><strong>Input</strong> Typhon</span>
        </div>
      </section>

      <section className="section evolution-section" id="goals">
        <header className="section-heading">
          <p className="section-index">02 / Goals</p>
          <h2>Where time<br />is saved.</h2>
          <p>
            Three workflow reductions lead to one outcome: more time to study.
          </p>
        </header>

        <div className="goal-flow">
          {goals.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.name}</h3><p>{item.problem}</p></div>
              <strong>{item.goal}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio">
        <header className="section-heading">
          <p className="section-index">03 / Projects</p>
          <h2>Problem.<br />Solved.</h2>
          <p>
            The screen previews match the real tools. The blue button opens the
            live app or its faculty-facing landing page.
          </p>
        </header>

        <div className="project-grid">
          {portfolio.map((project, index) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
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
              </div>
            </article>
          ))}
        </div>
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
