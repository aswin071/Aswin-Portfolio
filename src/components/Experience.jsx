import { experiences } from '../data/portfolio';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-eyebrow">Career Journey</div>
        <h2 className="section-title">Experience</h2>
        <div className="divider" />
        <p className="exp-subtitle italic-accent">3 years of shipping production code</p>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="timeline-item"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <FiBriefcase size={14} />
                </div>
                {idx < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="exp-type">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company gradient-text">{exp.company}</p>
                  </div>
                  <div className="exp-duration">
                    <FiCalendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="exp-highlight-item">
                      <span className="highlight-bullet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
