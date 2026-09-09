import Section from "./Section";
import { copy, education, experience, skills } from "../data/profile";
export default function ResumeSections({ lang }) {
  return (
    <>
      <Section id="experience" number="02" title={copy.experience[lang]}>
        <div className="timeline">
          {experience.map((item) => (
            <article className="job" key={item.id}>
              <div className="job-date">
                {item.date}
                <span>{item.location[lang]}</span>
              </div>
              <div>
                <h3>
                  {item.company[lang]}
                  <span className="role">{item.role[lang]}</span>
                </h3>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point[lang]}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="education" number="03" title={copy.education[lang]}>
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.date}>
              <span className="eyebrow">{item.date}</span>
              <h3>{item.school[lang]}</h3>
              <p>{item.degree[lang]}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="skills" number="04" title={copy.skills[lang]}>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title.en}>
              <h3>{group.title[lang]}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
