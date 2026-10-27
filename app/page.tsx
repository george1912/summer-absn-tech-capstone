"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  type: string;
  thesis: string;
  problem: string;
  observation: string;
  inspiration: string;
  build: string;
  learning: string;
  principle: string;
  preview: { kind: "image" | "iframe"; src: string; alt: string };
  href: string;
  source?: string;
};

const projects: Project[] = [
  {
    name: "Brightspace Sync",
    type: "Mac application · Course files",
    thesis: "Make the workspace ready before the studying begins.",
    problem: "Reaching one course file meant signing in, finding the course, opening content, locating the module, downloading the file, and organizing it before any learning could begin.",
    observation: "The sequence repeated across courses and devices. Files were easy to lose, difficult to keep current, and sometimes remained in formats that were harder to read or annotate.",
    inspiration: "File-transfer protocols suggested a central repository. Cloud storage showed how material could remain available across devices. An earlier PDF converter suggested preserving the original while preparing a more useful copy.",
    build: "A standalone Mac app synchronizes current course files locally, records what it has already seen, and creates a missing PDF copy when useful.",
    learning: "The surface problem was too many clicks. The deeper problem was readiness: a good workflow tool prepares the environment without deciding what the learner should think.",
    principle: "Prepare the workspace, preserve the source.",
    preview: { kind: "image", src: "./previews/brightspace-sync.png", alt: "Brightspace Sync interface showing the course file workflow" },
    href: "https://george1912.github.io/brightspace-sync/",
    source: "https://github.com/george1912/brightspace-sync",
  },
  {
    name: "Concept Map Builder",
    type: "Web application · Clinical documents",
    thesis: "Automate formatting, not clinical thinking.",
    problem: "Clinical concept maps require substantial organization before a student can begin connecting assessment findings, medications, priorities, and nursing care.",
    observation: "Important case information already existed in the Typhon case log, but it had to be found and moved into another structure. Formatting competed with the reasoning the assignment was intended to reveal.",
    inspiration: "A structured intake can function like scaffolding: reuse known information, expose missing fields, and leave interpretation visible to the student.",
    build: "A web workflow moves case-log information into an editable concept-map draft and flags gaps that still need attention.",
    learning: "Automation is most useful when it removes transcription while keeping every clinical conclusion reviewable and editable.",
    principle: "Move facts once. Keep judgment with the student.",
    preview: { kind: "image", src: "./previews/concept-map-builder.png", alt: "Concept Map Builder interface showing its guided clinical document workflow" },
    href: "https://george1912.github.io/concept-map-builder/",
    source: "https://github.com/george1912/concept-map-builder",
  },
  {
    name: "Typhon Form Filler",
    type: "Browser prototype · Clinical logs",
    thesis: "Reuse routine selections while keeping decisions visible.",
    problem: "Long Typhon forms require the same routine selections to be entered repeatedly, making documentation slower and increasing the chance of missed fields.",
    observation: "Much of the friction came from interface repetition rather than the clinical record itself. The useful data still needed to come from the student.",
    inspiration: "Browser form helpers demonstrate how saved preferences can reduce repeated input without inventing new information.",
    build: "A browser-based prototype reuses saved selections for routine fields and leaves the completed form open for review before submission.",
    learning: "Speed should never make an automated choice invisible. The user needs a clear final review point.",
    principle: "Fewer clicks, visible decisions, no generated clinical data.",
    preview: { kind: "iframe", src: "./previews/typhon-popup.html", alt: "Typhon Form Filler browser extension interface" },
    href: "https://github.com/george1912/typhon-case-filler-archive",
  },
  {
    name: "Critical Points Machine",
    type: "Web application · ATI remediation",
    thesis: "Give repeated structure back to the learner as usable time.",
    problem: "ATI remediation headings have to be copied and reorganized across three worksheets before students can write their critical points.",
    observation: "The repeated work was structural. The meaningful work was selecting, explaining, and writing the critical points.",
    inspiration: "Document-generation systems can reliably repeat headings and layout while leaving the substantive response blank for the learner.",
    build: "A web app formats ATI headings into the required worksheet structure. The student writes every critical point.",
    learning: "A narrow tool can protect learning more effectively than a tool that attempts to complete the assignment.",
    principle: "Generate the container, never the answer.",
    preview: { kind: "image", src: "./previews/critical-points.png", alt: "Critical Points Machine interface showing the worksheet formatter" },
    href: "https://george1912.github.io/critical-points-machine/",
    source: "https://github.com/george1912/critical-points-machine",
  },
  {
    name: "Pediatrics Nursing Guide",
    type: "Web guide · Study navigation",
    thesis: "Turn a long outline into a place that can be explored.",
    problem: "A large pediatric review outline is difficult to scan, revisit, and use as a study path.",
    observation: "The information was present, but the flat document gave every topic the same visual weight and made movement between related concepts slow.",
    inspiration: "Reference manuals and digital field guides use sections, landmarks, and progressive disclosure to make large bodies of information navigable.",
    build: "The guide organizes the outline into 10 sections and 95 topics with direct navigation for focused review.",
    learning: "Organization is not cosmetic. A clear information structure helps learners decide where to begin and what to revisit.",
    principle: "Make the next useful topic easy to find.",
    preview: { kind: "image", src: "./previews/pediatrics-guide.png", alt: "Pediatrics Nursing Guide showing section and topic navigation" },
    href: "https://george1912.github.io/pediatrics-nursing-web-guide/",
    source: "https://github.com/george1912/pediatrics-nursing-web-guide",
  },
  {
    name: "Community Prep",
    type: "Flashcard application · Active recall",
    thesis: "Convert a review deck from something to read into something to practice.",
    problem: "A large community-nursing review deck is difficult to work through using active recall when it remains a static sequence of slides or notes.",
    observation: "Review required a way to separate the prompt from the answer, return to uncertain material, and move through topics in manageable groups.",
    inspiration: "Flashcard systems combine retrieval practice, immediate rationale, and visible review status to make repetition intentional.",
    build: "The app turns 270 cards across 13 topics into questions with rationales, review marks, and blueprint-guided practice.",
    learning: "A study tool should make effort visible and make returning to weak areas easier, not simply display more information.",
    principle: "Practice recall, then explain why.",
    preview: { kind: "iframe", src: "https://george1912.github.io/community-prep/", alt: "Community Prep flashcard application" },
    href: "https://george1912.github.io/community-prep/",
    source: "https://github.com/george1912/community-prep",
  },
  {
    name: "Fox Timer",
    type: "Chrome extension · ATI Study Buddy",
    thesis: "Protect focused study time with a small, supportive presence.",
    problem: "ATI pages can time out while a student is reading carefully or taking notes, interrupting the study session.",
    observation: "The interruption was technical, but its cost was cognitive: the learner had to stop, recover the session, and rebuild focus.",
    inspiration: "Focus timers make a study interval visible. Session keep-awake tools prevent an interface from ending that interval prematurely.",
    build: "A Chrome extension keeps the ATI session awake for a chosen period and gives the timer a visible fox study-buddy identity.",
    learning: "Some useful interventions are intentionally small. Reliability and emotional tone can matter as much as feature count.",
    principle: "Keep the session present while the learner stays focused.",
    preview: { kind: "iframe", src: "https://george1912.github.io/fox-timer/", alt: "Fox Timer ATI Study Buddy interface" },
    href: "https://george1912.github.io/fox-timer/",
  },
];

function AppVisual({ project }: { project: Project }) {
  return (
    <figure className="app-visual">
      {project.preview.kind === "image" ? <img src={project.preview.src} alt={project.preview.alt} /> : <iframe src={project.preview.src} title={project.preview.alt} loading="lazy" />}
      <figcaption><span>Interface view</span><b>{project.name}</b></figcaption>
    </figure>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState<"forward" | "backward">("forward");
  const [focusedSection, setFocusedSection] = useState("");
  const mobilePaperRef = useRef<HTMLElement>(null);
  const project = projects[active];

  function go(direction: number) {
    if (turning) return;
    setTurnDirection(direction > 0 ? "forward" : "backward");
    setTurning(true);
    window.setTimeout(() => {
      setActive((current) => (current + direction + projects.length) % projects.length);
      mobilePaperRef.current?.scrollTo({ top: 0, behavior: "instant" });
      window.setTimeout(() => setTurning(false), 80);
    }, 220);
  }

  function selectProject(index: number) {
    if (index === active || turning) return;
    setTurnDirection(index > active ? "forward" : "backward");
    setTurning(true);
    window.setTimeout(() => {
      setActive(index);
      mobilePaperRef.current?.scrollTo({ top: 0, behavior: "instant" });
      window.setTimeout(() => setTurning(false), 80);
    }, 220);
  }

  function jumpToSection(section: string) {
    setFocusedSection(section);
    const container = mobilePaperRef.current;
    const target = container?.querySelector<HTMLElement>(`[data-section="${section}"]`);
    if (container && target && window.matchMedia("(max-width: 720px)").matches) {
      container.scrollTo({ top: Math.max(target.offsetTop - 20, 0), behavior: "smooth" });
    }
    window.setTimeout(() => setFocusedSection(""), 900);
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (open && event.key === "ArrowRight") go(1);
      if (open && event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <main className={`experience ${open ? "book-is-open" : ""}`}>
      <div className="clinical-backdrop" aria-hidden="true" /><div className="focus-wash" aria-hidden="true" />
      <header className="site-mark"><span>GTOOLS STUDIO</span><small>Nursing innovation field notes</small></header>
      <section className="book-scene" aria-label="Interactive nursing innovation field book">
        <div className="book-shadow" aria-hidden="true" />
        <div className={`field-book ${open ? "is-open" : "is-closed"}`}>
          <div className="page-block" aria-hidden="true" />
          <div className={`open-spread ${turning ? `is-turning ${turnDirection}` : ""}`} aria-hidden={!open}>
            <article className="paper left-page">
              <div className="page-heading"><span>FIELD NOTE {String(active + 1).padStart(2, "0")}</span><span>{project.type}</span></div>
              <p className="chapter-label">Project {active + 1} of {projects.length}</p>
              <h1>{project.name}</h1>
              <p className="lead-note">{project.thesis}</p>
              <section data-section="problem" className={`note-section ${focusedSection === "problem" ? "is-focused" : ""}`}><h2><b>01</b> Problem</h2><p>{project.problem}</p></section>
              <section data-section="observation" className={`note-section ${focusedSection === "observation" ? "is-focused" : ""}`}><h2><b>02</b> Observation</h2><p>{project.observation}</p></section>
              <AppVisual project={project} />
              <span className="page-number">{String(active * 2 + 1).padStart(2, "0")}</span>
            </article>
            <article className="paper right-page">
              <div className="page-heading"><span>BUILD LOG</span><span>METHOD + REFLECTION</span></div>
              <section data-section="inspiration" className={`note-section ${focusedSection === "inspiration" ? "is-focused" : ""}`}><h2><b>03</b> Inspiration</h2><p>{project.inspiration}</p></section>
              <section data-section="build" className={`note-section ${focusedSection === "build" ? "is-focused" : ""}`}><h2><b>04</b> How I built it</h2><p>{project.build}</p></section>
              <section data-section="learning" className={`note-section ${focusedSection === "learning" ? "is-focused" : ""}`}><h2><b>05</b> What I learned</h2><p>{project.learning}</p></section>
              <blockquote>{project.principle}</blockquote>
              <div className="project-actions"><a href={project.href} target="_blank" rel="noreferrer">Open project ↗</a>{project.source && <a href={project.source} target="_blank" rel="noreferrer">Source</a>}</div>
              <span className="page-number">{String(active * 2 + 2).padStart(2, "0")}</span>
            </article>
          </div>

          <article ref={mobilePaperRef} className={`mobile-paper ${turning ? `is-turning ${turnDirection}` : ""}`} aria-hidden={!open}>
            <div className="page-heading"><span>FIELD NOTE {String(active + 1).padStart(2, "0")}</span><span>{active + 1} / {projects.length}</span></div>
            <p className="chapter-label">{project.type}</p><h1>{project.name}</h1><p className="lead-note">{project.thesis}</p>
            <AppVisual project={project} />
            <section data-section="problem" className={`note-section ${focusedSection === "problem" ? "is-focused" : ""}`}><h2><b>01</b> Problem</h2><p>{project.problem}</p></section>
            <section data-section="observation" className={`note-section ${focusedSection === "observation" ? "is-focused" : ""}`}><h2><b>02</b> Observation</h2><p>{project.observation}</p></section>
            <section data-section="inspiration" className={`note-section ${focusedSection === "inspiration" ? "is-focused" : ""}`}><h2><b>03</b> Inspiration</h2><p>{project.inspiration}</p></section>
            <section data-section="build" className={`note-section ${focusedSection === "build" ? "is-focused" : ""}`}><h2><b>04</b> Build</h2><p>{project.build}</p></section>
            <section data-section="learning" className={`note-section ${focusedSection === "learning" ? "is-focused" : ""}`}><h2><b>05</b> Learning</h2><p>{project.learning}</p></section>
            <blockquote>{project.principle}</blockquote>
          </article>

          <button className="book-cover" type="button" onClick={() => setOpen(true)} aria-label="Open the nursing innovation field book">
            <span className="cover-kicker">GTOOLS STUDIO / 2026</span><span className="cover-title">Nursing<br />Innovation<br /><em>Field Book</em></span><span className="cover-prompt">Open the field book <b>→</b></span><span className="cover-owner">George · ABSN</span>
          </button>
          <div className="spiral" aria-hidden="true">{Array.from({ length: 13 }).map((_, index) => <i key={index} />)}</div>
          <nav className="section-bookmarks" aria-label="Jump to project section">
            {[["problem", "Problem"], ["observation", "Observe"], ["inspiration", "Inspire"], ["build", "Build"], ["learning", "Learn"]].map(([id, label]) => <button type="button" key={id} onClick={() => jumpToSection(id)}>{label}</button>)}
          </nav>
          <nav className="project-bookmarks" aria-label="Jump to a project">
            {projects.map((item, index) => <button type="button" key={item.name} className={index === active ? "active" : ""} onClick={() => selectProject(index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.name}</b></button>)}
          </nav>
          <button className="page-turn page-turn-prev" type="button" onClick={() => go(-1)} aria-label="Turn to previous project"><span>←</span><small>Previous</small></button>
          <button className="page-turn page-turn-next" type="button" onClick={() => go(1)} aria-label="Turn to next project"><small>Next</small><span>→</span></button>
        </div>
        <button className="close-book" type="button" onClick={() => setOpen(false)}>Close field book <span>×</span></button>
        <p className="scene-hint">{open ? project.name : "Open the notebook to enter the project"}</p>
      </section>
    </main>
  );
}
