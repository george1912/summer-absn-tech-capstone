"use client";

import { useEffect, useState } from "react";

const pages = [
  { label: "Observation", eyebrow: "Entry 01 / Brightspace Sync", title: "The work started before the studying could.", body: "A course file took too many steps to reach: sign in, find the course, open content, locate the module, download the file, and organize it. The same sequence repeated across courses and devices." },
  { label: "Build notes", eyebrow: "Entry 01 / Prototype", title: "Make the workspace ready first.", body: "I built a standalone Mac app that synchronizes course files locally, remembers what it has already seen, and creates a PDF copy when that makes the material easier to read or annotate." },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mobilePage, setMobilePage] = useState(0);
  const [turning, setTurning] = useState(false);

  function turnPage(direction: number) {
    if (turning) return;
    setTurning(true);
    window.setTimeout(() => {
      setMobilePage((current) => (current + direction + pages.length) % pages.length);
      setTurning(false);
    }, 260);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (open && event.key === "ArrowRight") turnPage(1);
      if (open && event.key === "ArrowLeft") turnPage(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <main className={`experience ${open ? "book-is-open" : ""}`}>
      <div className="clinical-backdrop" aria-hidden="true" />
      <div className="focus-wash" aria-hidden="true" />
      <header className="site-mark"><span>GTOOLS STUDIO</span><small>Nursing innovation field notes</small></header>

      <section className="book-scene" aria-label="Interactive nursing innovation field book">
        <div className="book-shadow" aria-hidden="true" />
        <div className={`field-book ${open ? "is-open" : "is-closed"}`}>
          <div className="page-block" aria-hidden="true" />
          <div className="open-spread" aria-hidden={!open}>
            <article className="paper left-page">
              <div className="page-heading"><span>FIELD NOTE 01</span><span>OBSERVATION</span></div>
              <p className="hand-note">What was getting in the way?</p>
              <h1>Brightspace<br />Sync</h1>
              <p className="lead-note">The work started before the studying could.</p>
              <div className="ruled-copy">
                <h2>Problem</h2>
                <p>A course file took too many steps to reach: sign in, find the course, open content, locate the module, download the file, and organize it.</p>
                <h2>Observation</h2>
                <p>The same sequence repeated across courses and devices. Files were easy to lose, difficult to keep current, and often trapped in formats that were harder to use.</p>
              </div>
              <span className="page-number">01</span>
            </article>

            <article className="paper right-page">
              <div className="page-heading"><span>BUILD LOG</span><span>ITERATION 01</span></div>
              <figure className="field-note-photo">
                <img src="./notes/brightspace-field-note.png" alt="Original handwritten Brightspace Sync field notes" />
                <figcaption>original working note</figcaption>
              </figure>
              <div className="margin-note">look at the repeated steps →</div>
              <div className="ruled-copy compact">
                <h2>What inspired it</h2><p>File-transfer tools, cloud storage, and a previous PDF converter all pointed toward a workspace that could prepare itself.</p>
                <h2>What I built</h2><p>A Mac app that synchronizes course files locally, records what it has already seen, and creates a PDF copy when useful.</p>
                <h2>What I learned</h2><p>The deeper problem was not downloading. It was readiness.</p>
              </div>
              <a className="project-link" href="https://george1912.github.io/brightspace-sync/" target="_blank" rel="noreferrer">See the working tool <span>↗</span></a>
              <span className="page-number">02</span>
            </article>
          </div>

          <article className={`mobile-paper ${turning ? "is-turning" : ""}`} aria-hidden={!open}>
            <div className="page-heading"><span>FIELD NOTE 01</span><span>{pages[mobilePage].label}</span></div>
            <p className="hand-note">{pages[mobilePage].eyebrow}</p>
            <h1>{pages[mobilePage].title}</h1>
            {mobilePage === 0 ? <div className="ruled-copy"><h2>Problem + observation</h2><p>{pages[mobilePage].body}</p></div> : <><figure className="field-note-photo"><img src="./notes/brightspace-field-note.png" alt="Original handwritten Brightspace Sync field notes" /></figure><div className="ruled-copy compact"><p>{pages[mobilePage].body}</p></div></>}
            <div className="mobile-controls"><button type="button" onClick={() => turnPage(-1)} aria-label="Previous page">←</button><span>{mobilePage + 1} / {pages.length}</span><button type="button" onClick={() => turnPage(1)} aria-label="Next page">→</button></div>
          </article>

          <button className="book-cover" type="button" onClick={() => setOpen(true)} aria-label="Open the nursing innovation field book">
            <span className="cover-kicker">GTOOLS STUDIO / 2026</span>
            <span className="cover-title">Nursing<br />Innovation<br /><em>Field Book</em></span>
            <span className="cover-rule" />
            <span className="cover-prompt">Open the field book <b>→</b></span>
            <span className="cover-owner">George · ABSN</span>
          </button>
          <div className="spiral" aria-hidden="true">{Array.from({ length: 13 }).map((_, index) => <i key={index} />)}</div>
        </div>
        <button className="close-book" type="button" onClick={() => setOpen(false)}>Close field book <span>×</span></button>
        <p className="scene-hint">{open ? "Use the page arrows to explore" : "Open the notebook to enter the project"}</p>
      </section>
    </main>
  );
}
