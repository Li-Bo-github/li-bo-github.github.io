import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import ResumeSections from "./components/ResumeSections";
import Section from "./components/Section";
import { copy, profile } from "./data/profile";
import { projects, research, archive } from "./data/projects";

export default function App() {
  const [lang, setLang] = useState("zh");
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title =
      lang === "zh"
        ? "李博 Bo Li — 软件工程师 · AI 探索者"
        : "Bo Li — Software Engineer & AI Explorer";
  }, [lang]);
  return (
    <>
      <a className="skip-link" href="#main">
        {lang === "zh" ? "跳转到正文" : "Skip to content"}
      </a>
      <Header lang={lang} setLang={setLang} />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> {profile.title[lang]}
            </p>
            <p className="hello">
              {lang === "zh" ? "你好，我是李博。" : "Hi, I’m Bo Li."}
            </p>
            <h1 id="hero-title">{profile.headline[lang]}</h1>
            <p className="intro">{profile.intro[lang]}</p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                {copy.viewWork[lang]} <span>↗</span>
              </a>
              <a
                className="resume-link"
                href={
                  lang === "zh"
                    ? "/resumes/bo-li-zh.pdf"
                    : "/resumes/bo-li-bilingual.pdf"
                }
                target="_blank"
                rel="noreferrer"
              >
                {copy.resume[lang]} ↓
              </a>
            </div>
            <div className="hero-foot">
              FULL STACK <span> / </span> CLOUD <span> / </span> GENERATIVE AI
            </div>
          </div>
          <figure className="portrait">
            <img
              src="/images/bo-li.jpg"
              alt={lang === "zh" ? "李博的照片" : "Portrait of Bo Li"}
              width="720"
              height="900"
              fetchPriority="high"
            />
            <figcaption>
              <span>BO LI / 李博</span>
              <span>ENGINEER & EXPLORER</span>
            </figcaption>
          </figure>
        </section>
        <div className="credential-strip">
          <span>Amazon</span>
          <span>
            UIUC <small>MCS ’25</small>
          </span>
          <span>
            UW–Madison <small>BS ’23</small>
          </span>
          <span className="strip-note">
            {lang === "zh" ? "工程 × 创造力" : "ENGINEERING × CREATIVITY"}
          </span>
        </div>
        <Section
          id="projects"
          number="01"
          title={copy.projects[lang]}
          intro={copy.projectIntro[lang]}
        >
          <div className="project-grid">
            {projects.map((p) => (
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
            <a href="#home">{lang === "zh" ? "回到顶部" : "Back to top"} ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
