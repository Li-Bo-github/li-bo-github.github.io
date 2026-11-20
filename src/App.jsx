import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ResumeSections from "./components/ResumeSections";
import Section from "./components/Section";
import { copy, profile } from "./data/profile";
import { projects, research, archive } from "./data/projects";

// Priority: ?lang= link > saved choice > browser language. Default zh.
function initialLang() {
  if (typeof window === "undefined") return "zh"; // build-time prerender
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "zh" || q === "en") return q;
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch {}
  if (saved === "zh" || saved === "en") return saved;
  return /^zh\b/i.test(navigator.language || "zh") ? "zh" : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {} // storage blocked (private mode): language just isn't remembered
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = profile.pageTitle[lang];
  }, [lang]);
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip[lang]}
      </a>
      <Header lang={lang} setLang={setLang} />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            {profile.status && (
              <p className="status-badge">
                <span className="dot" /> {profile.status[lang]}
              </p>
            )}
            <p className="eyebrow">
              {profile.title[lang]}
            </p>
            <p className="hello">
              {profile.hello[lang]}
            </p>
            <h1 id="hero-title">{profile.headline[lang]}</h1>
            <p className="intro">{profile.intro[lang]}</p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                {copy.viewWork[lang]} <span>↗</span>
              </a>
              <a
                className="resume-link"
                href={profile.resume[lang]}
                target="_blank"
                rel="noreferrer"
              >
                {copy.resume[lang]} ↓
              </a>
            </div>
            <div className="hero-foot">
              {profile.focus.map((f, i) => (
                <Fragment key={f}>
                  {i > 0 && <span> / </span>}
                  {f}
                </Fragment>
              ))}
            </div>
          </div>
          <figure className="portrait">
            <picture>
              <source srcSet="/images/bo-li.webp" type="image/webp" />
              <img
                src="/images/bo-li.jpg"
                alt={profile.portraitAlt[lang]}
                width="800"
                height="800"
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <span>BO LI / 李博</span>
              <span>ENGINEER & EXPLORER</span>
            </figcaption>
          </figure>
        </section>
        <div className="credential-strip">
          {profile.credentials.map((c) => (
            <span key={c.name}>
              {c.name} {c.note && <small>{c.note}</small>}
            </span>
          ))}
          <span className="strip-note">{copy.strip[lang]}</span>
        </div>
        <Section
          id="projects"
          number="01"
          title={copy.projects[lang]}
          intro={copy.projectIntro[lang]}
        >
          <div className="project-grid">
            {projects
              .filter((p) => !p.hidden)
              .map((p) => (
              <ProjectCard key={p.id} project={p} lang={lang} />
            ))}
          </div>
          <details className="archive">
            <summary>{copy.archive[lang]}</summary>
            {archive.map((p) => (
              <a href={p.url} target="_blank" rel="noreferrer" key={p.id}>
                <span>{p.title[lang]}</span>
                <small>{p.tags} ↗</small>
              </a>
            ))}
          </details>
        </Section>
        <ResumeSections lang={lang} />
        <Section id="research" number="05" title={copy.research[lang]}>
          <div className="research-list">
            {research.map((p) => (
              <article key={p.id}>
                <span className="eyebrow">{p.date}</span>
                <h3>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noreferrer">
                      {p.title[lang]} ↗
                    </a>
                  ) : (
                    p.title[lang]
                  )}
                </h3>
                <p>{p.description[lang]}</p>
              </article>
            ))}
          </div>
        </Section>
        <footer id="contact">
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>{copy.footer[lang]}</h2>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Bo Li</span>
            <div>
              <a href={profile.github}>GitHub ↗</a>
              <a href={profile.linkedin}>LinkedIn ↗</a>
              <a href={profile.instagram}>Instagram ↗</a>
            </div>
            <a href="#home">{copy.backToTop[lang]} ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
