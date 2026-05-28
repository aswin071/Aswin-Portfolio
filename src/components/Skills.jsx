import { useState } from 'react';
import {
  SiPython, SiDjango, SiFastapi, SiReact, SiPostgresql,
  SiMongodb, SiRedis, SiDocker,
  SiRabbitmq, SiGit, SiLinux,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { skills, workStack } from '../data/portfolio';
import './Skills.css';

const ICON_MAP = {
  SiPython, SiDjango, SiFastapi, SiReact, SiPostgresql,
  SiMongodb, SiRedis, SiDocker,
  SiRabbitmq, SiGit, SiLinux,
  FaAws,
};


const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-header">
          <div>
            <div className="section-eyebrow">Technical Expertise</div>
            <h2 className="section-title">My Skills</h2>
            <div className="divider" />
          </div>
          <div className="skills-desc">
            <p>
              <strong>I build things for scale.</strong><br />
              <span className="italic-accent">Design, Develop, Deploy.</span>
            </p>
            <p className="skills-desc-body">
              My go-to stack is Python with Django &amp; FastAPI for backend systems, 
              complemented by React.js on the frontend. I design scalable architectures 
              from scratch and deploy them on AWS with Docker and CI/CD pipelines.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skills[active].map((skill, i) => (
            <div
              key={skill}
              className="skill-pill-card"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="skill-dot" />
              {skill}
            </div>
          ))}
        </div>

        {/* Work Stack */}
        <div className="work-stack">
          <div className="work-stack-label">
            <span>Work Stack</span>
            <span className="arrow-label">→</span>
          </div>
          <div className="work-stack-grid">
            {workStack.map((item) => {
              const IconComponent = ICON_MAP[item.iconKey];
              return (
                <div
                  key={item.name}
                  className="stack-item"
                  style={{ '--icon-color': item.color }}
                >
                  <span className="stack-icon">
                    {IconComponent && (
                      <IconComponent size={20} color={item.color} />
                    )}
                  </span>
                  <span className="stack-name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
