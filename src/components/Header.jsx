import { copy, profile } from "../data/profile";
export default function Header({ lang, setLang }) {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Bo Li home">
        b<span>.</span>
      </a>
      <nav aria-label={copy.mainNav[lang]}>
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
          aria-label={copy.switchLang[lang]}
        >
          {copy.otherLang[lang]}
        </button>
        <a className="contact-link" href={`mailto:${profile.email}`}>
          {copy.contact[lang]} <span>↗</span>
        </a>
      </div>
    </header>
  );
}
