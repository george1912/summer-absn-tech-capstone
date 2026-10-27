"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  tab: string;
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
    tab: "Sync",
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
    tab: "Concept Map",
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
    tab: "Typhon",
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
    tab: "ATI Points",
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
    tab: "Pediatrics",
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
    tab: "Community",
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
    tab: "Fox Timer",
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

function ProjectSketch({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <figure className="project-sketch" aria-label={`Concept sketch for ${projects[index].name}`}>
      <svg viewBox="0 0 280 145" role="img">
        {index === 0 && <><path {...common} d="M38 48h64l13 15h94v58H38z"/><path {...common} d="M96 25h75v58h-75zM112 41h42M112 53h34"/><path className="sketch-accent" {...common} d="M180 33c22 8 30 23 27 42M199 65l8 10 9-9"/></>}
        {index === 1 && <><circle {...common} cx="140" cy="71" r="24"/><circle {...common} cx="54" cy="35" r="14"/><circle {...common} cx="225" cy="34" r="14"/><circle {...common} cx="55" cy="112" r="14"/><circle {...common} cx="226" cy="111" r="14"/><path {...common} d="M67 42l50 21M213 42l-50 21M67 105l50-22M213 104l-50-21"/><path className="sketch-accent" {...common} d="M129 70l8 8 17-20"/></>}
        {index === 2 && <><rect {...common} x="53" y="20" width="175" height="108" rx="5"/><path {...common} d="M76 47h88M76 72h88M76 97h88"/><rect {...common} x="186" y="39" width="20" height="16" rx="2"/><rect {...common} x="186" y="64" width="20" height="16" rx="2"/><rect {...common} x="186" y="89" width="20" height="16" rx="2"/><path className="sketch-accent" {...common} d="M190 47l5 5 10-12M190 72l5 5 10-12"/></>}
        {index === 3 && <><path {...common} d="M40 35h68v88H40zM105 25h68v98h-68zM170 39h68v84h-68z"/><path {...common} d="M54 57h38M54 70h38M119 48h38M119 61h38M184 60h38M184 73h38"/><path className="sketch-accent" {...common} d="M82 102l93-64M173 38l14-6-6 14"/></>}
        {index === 4 && <><path {...common} d="M34 38c42-12 73-4 106 19v69c-33-23-64-31-106-19zM246 38c-42-12-73-4-106 19v69c33-23 64-31 106-19z"/><path {...common} d="M140 57v69"/><path className="sketch-accent" {...common} d="M62 45v-18h31v23M187 49V25h31v20"/></>}
        {index === 5 && <><rect {...common} x="45" y="38" width="115" height="76" rx="5"/><rect {...common} x="78" y="23" width="115" height="76" rx="5"/><rect {...common} x="111" y="38" width="115" height="76" rx="5"/><path {...common} d="M130 61h78M130 75h57"/><path className="sketch-accent" {...common} d="M61 72l10 10 18-25"/></>}
        {index === 6 && <><circle {...common} cx="194" cy="75" r="42"/><path {...common} d="M194 47v29l18 12"/><path {...common} d="M38 83l17-48 29 21 29-21 17 48-20 35H58zM65 81h1M102 81h1M72 99c8 7 16 7 24 0"/><path className="sketch-accent" {...common} d="M49 47l-11-17M119 47l11-17"/></>}
      </svg>
      <figcaption>{projects[index].principle}</figcaption>
    </figure>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDirection, setTurnDirection] = useState<"forward" | "backward">("forward");
  const mobilePaperRef = useRef<HTMLElement>(null);
  const project = projects[active];

  function go(direction: number) {
    if (turning) return;
    setTurnDirection(direction > 0 ? "forward" : "backward");
    setTurning(true);
    window.setTimeout(() => {
      setActive((current) => (current + direction + projects.length) % projects.length);
      mobilePaperRef.current?.scrollTo({ top: 0, behavior: "instant" });
      window.setTimeout(() => setTurning(false), 310);
    }, 300);
  }

  function selectProject(index: number) {
    if (index === active || turning) return;
    setTurnDirection(index > active ? "forward" : "backward");
    setTurning(true);
    window.setTimeout(() => {
      setActive(index);
      mobilePaperRef.current?.scrollTo({ top: 0, behavior: "instant" });
      window.setTimeout(() => setTurning(false), 310);
    }, 300);
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
              <section className="note-section"><h2><b>01</b> Problem</h2><p>{project.problem}</p></section>
              <section className="note-section"><h2><b>02</b> Observation</h2><p>{project.observation}</p></section>
              <AppVisual project={project} />
              <span className="page-number">{String(active * 2 + 1).padStart(2, "0")}</span>
            </article>
            <article className="paper right-page">
              <div className="page-heading"><span>BUILD LOG</span><span>METHOD + REFLECTION</span></div>
              <section className="note-section"><h2><b>03</b> Inspiration</h2><p>{project.inspiration}</p></section>
              <section className="note-section"><h2><b>04</b> How I built it</h2><p>{project.build}</p></section>
              <section className="note-section"><h2><b>05</b> What I learned</h2><p>{project.learning}</p></section>
              <blockquote>{project.principle}</blockquote>
              <ProjectSketch index={active} />
              <div className="project-actions"><a href={project.href} target="_blank" rel="noreferrer">Open project ↗</a>{project.source && <a href={project.source} target="_blank" rel="noreferrer">Source</a>}</div>
              <span className="page-number">{String(active * 2 + 2).padStart(2, "0")}</span>
            </article>
          </div>

          <article ref={mobilePaperRef} className={`mobile-paper ${turning ? `is-turning ${turnDirection}` : ""}`} aria-hidden={!open}>
            <div className="page-heading"><span>FIELD NOTE {String(active + 1).padStart(2, "0")}</span><span>{active + 1} / {projects.length}</span></div>
            <p className="chapter-label">{project.type}</p><h1>{project.name}</h1><p className="lead-note">{project.thesis}</p>
            <AppVisual project={project} />
            <section className="note-section"><h2><b>01</b> Problem</h2><p>{project.problem}</p></section>
            <section className="note-section"><h2><b>02</b> Observation</h2><p>{project.observation}</p></section>
            <section className="note-section"><h2><b>03</b> Inspiration</h2><p>{project.inspiration}</p></section>
            <section className="note-section"><h2><b>04</b> Build</h2><p>{project.build}</p></section>
            <section className="note-section"><h2><b>05</b> Learning</h2><p>{project.learning}</p></section>
            <blockquote>{project.principle}</blockquote>
            <ProjectSketch index={active} />
          </article>

          <button className="book-cover" type="button" onClick={() => setOpen(true)} aria-label="Open the nursing innovation field book">
            <span className="cover-kicker">GTOOLS STUDIO / 2026</span><span className="cover-title">Nursing<br />Innovation<br /><em>Field Book</em></span><span className="cover-prompt">Open the field book <b>→</b></span><span className="cover-owner">George · ABSN</span>
          </button>
          <div className="spiral" aria-hidden="true">{Array.from({ length: 13 }).map((_, index) => <i key={index} />)}</div>
          <nav className="project-bookmarks" aria-label="Jump to a project">
            {projects.map((item, index) => <button type="button" key={item.name} className={index === active ? "active" : ""} onClick={() => selectProject(index)}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.tab}</b></button>)}
          </nav>
          {turning && <div className={`turn-sheet ${turnDirection}`} aria-hidden="true" />}
          <button className="page-turn page-turn-prev" type="button" onClick={() => go(-1)} aria-label="Turn to previous project"><span>←</span><small>Previous</small></button>
          <button className="page-turn page-turn-next" type="button" onClick={() => go(1)} aria-label="Turn to next project"><small>Next</small><span>→</span></button>
        </div>
        <button className="close-book" type="button" onClick={() => setOpen(false)}>Close field book <span>×</span></button>
        <p className="scene-hint">{open ? project.name : "Open the notebook to enter the project"}</p>
      </section>
    </main>
  );
}
