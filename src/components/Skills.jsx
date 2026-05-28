import { useState } from 'react';
import {
  SiPython, SiDjango, SiFastapi, SiReact, SiPostgresql,
  SiMongodb, SiRedis, SiDocker, SiRabbitmq, SiGit, SiLinux,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { skills, workStack } from '../data/portfolio';
import './Skills.css';

const ICON_MAP = {
  SiPython, SiDjango, SiFastapi, SiReact, SiPostgresql,
  SiMongodb, SiRedis, SiDocker, SiRabbitmq, SiGit, SiLinux,
  FaAws,
};

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* Overlapping circles icon */}
        <div className="skills-icon">
          <div className="sk-circle sk-circle-a" />
          <div className="sk-circle sk-circle-b" />
        </div>

        <h2 className="skills-title">My Skills</h2>

        {/* Intro row */}
        <div className="skills-intro">
          <div className="skills-intro-left">
            <p className="skills-intro-bold">I build things for the people</p>
            <p className="skills-intro-italic">I can Design, Develop, Deploy</p>
          </div>
          <div className="skills-intro-right">
            <p>
              My go-to stack is Python with Django &amp; FastAPI for backend systems,
              complemented by React.js on the frontend. I collaborate with teams to
              create a variety of scalable, production-ready solutions.
            </p>
            <p>
              I have a thing for making high-performance systems, so I always architect
              from scratch and deploy with Docker and CI/CD pipelines on AWS, giving
              every app a reliable and scalable infrastructure.
            </p>
          </div>
        </div>

        {/* Skills row */}
        <div className="skills-row">
          <div className="skills-row-label">
            <span>Skills</span>
            <span className="row-arrow">→</span>
          </div>
          <div className="skills-row-content">
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
          </div>
        </div>

        {/* Work Stack row */}
        <div className="skills-row skills-row-last">
          <div className="skills-row-label">
            <span>Work Stack</span>
            <span className="row-arrow">→</span>
          </div>
          <div className="skills-row-content">
            <div className="work-stack-grid">
              {workStack.map((item) => {
                const Icon = ICON_MAP[item.iconKey];
                return (
                  <div
                    key={item.name}
                    className="stack-item"
                    style={{ '--icon-color': item.color }}
                  >
                    <span className="stack-icon">
                      {Icon && <Icon size={18} color={item.color} />}
                    </span>
                    <span className="stack-name">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
