import { useState } from "react";
import { copy } from "../data/profile";

export default function ProjectCard({ project, lang }) {
  const [failed, setFailed] = useState(false);
  const p = project;
  const coming = p.status === "coming-soon" && !p.media?.src && !p.url;
  return (
    <article className="project-card">
      {p.media?.src ? (
        <div className="video-wrap">
          <video
            key={p.media.src}
            controls
            playsInline
            preload="none"
            poster={p.media.poster}
            onError={() => setFailed(true)}
            aria-label={p.title[lang]}
          >
            <source src={p.media.src} />
            {p.media.captions && (
              <track
                kind="captions"
                src={p.media.captions}
                srcLang={p.media.captionsLang || lang}
                label={p.media.captionsLang || lang}
                default
              />
            )}
          </video>
          {failed && <p role="status">{copy.videoError[lang]}</p>}
          <a
            className="video-link"
            href={p.media.src}
            target="_blank"
            rel="noreferrer"
          >
            {copy.openVideo[lang]} ↗
          </a>
        </div>
      ) : (
        <div className={`project-art ${p.visual}`} aria-hidden="true">
          {p.metric ? (
            <div className="metric">
              {p.metric}
              <span>{p.metricLabel[lang]}</span>
            </div>
          ) : p.visual === "motion" ? (
            <>
              <div className="film-orbit" />
              <span className="art-label">IMAGINE. GENERATE. CREATE.</span>
            </>
          ) : (
            <>
              <div className="parking-path" />
              <span className="art-label">PERCEPTION → PLANNING → CONTROL</span>
            </>
          )}
        </div>
      )}
      <div className="project-content">
        <div className="card-meta">
          <span>{p.category}</span>
          {coming && <span className="status">{copy.coming[lang]}</span>}
        </div>
        <h3>{p.title[lang]}</h3>
        <p>{p.description[lang]}</p>
        <div className="tags">
          {p.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {p.url && (
          <a
            className="text-link"
            href={p.url}
            target="_blank"
            rel="noreferrer"
          >
            {p.url.includes("github.com")
              ? copy.source[lang]
              : copy.visit[lang]}{" "}
            <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
