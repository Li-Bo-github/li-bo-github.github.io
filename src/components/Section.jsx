export default function Section({ id, number, title, children, intro }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div>
          <span className="eyebrow">{number} /</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {intro && <p>{intro}</p>}
      </div>
      {children}
    </section>
  );
}
