import { copy, profile } from "../data/profile";
export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Bo Li home">
        b<span>.</span>
      </a>
      <nav aria-label={lang === "zh" ? "主导航" : "Main navigation"}>
        {["projects", "experience", "research"].map((id) => (
          <a key={id} href={`#${id}`}>
            {copy[id][lang]}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="language"
          onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          aria-label={lang === "zh" ? "Switch to English" : "切换为中文"}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
        <a className="contact-link" href={`mailto:${profile.email}`}>
          {copy.contact[lang]} <span>↗</span>
        </a>
      </div>
    </header>
  );
}
