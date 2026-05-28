import { useState } from 'react';
import { projects } from '../data/portfolio';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiCode } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  const prev = () => setActiveProject((activeProject - 1 + projects.length) % projects.length);
  const next = () => setActiveProject((activeProject + 1) % projects.length);

  if (projects.length === 0) {
    return (
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
          <div className="projects-empty">
            <div className="empty-icon"><FiCode size={40} /></div>
            <h3 className="empty-title">Projects Coming Soon</h3>
            <p className="empty-desc">
              Add your projects in <code>src/data/portfolio.js</code> to display them here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        {/* Header */}
        <div className="projects-header">
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
        </div>

        {/* ── Main Mockup Viewer ──────────────────────────── */}
        <div className="mockup-container" style={{ '--accent-color': project.color }}>
          
          {/* Left Arrow */}
          {projects.length > 1 && (
            <button className="nav-arrow nav-left" onClick={prev} aria-label="Previous">
              <FiChevronLeft />
            </button>
          )}

          {/* Mockup Stage */}
          <div className="mockup-stage">
            <div className="devices-wrap">
              {/* ── Tablet ── */}
              <div className="tablet-frame">
                <div className="tablet-topbar"><span className="tablet-camera" /></div>
                <div className="tablet-screen">
                  <img src={project.images.web} alt={`${project.title} — desktop`} draggable={false} />
                </div>
                <div className="tablet-chin" />
              </div>

              {/* ── Phone ── */}
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <img src={project.images.mobile} alt={`${project.title} — mobile`} draggable={false} />
                </div>
                <div className="phone-home" />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          {projects.length > 1 && (
            <button className="nav-arrow nav-right" onClick={next} aria-label="Next">
              <FiChevronRight />
            </button>
          )}

        </div>

        {/* ── Thumbnail Strip ─────────────────────────────── */}
        {projects.length > 1 && (
          <div className="thumbs-box">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`thumb ${i === activeProject ? 'thumb-active' : ''}`}
                onClick={() => setActiveProject(i)}
                style={{ '--thumb-color': p.color }}
              >
                <img src={p.images.web} alt={p.title} />
                <span className="thumb-num">{i + 1}</span>
              </button>
            ))}
          </div>
        )}

        {/* ── Details Row ─────────────────────────────────── */}
        <div className="project-details" style={{ '--accent-color': project.color }}>

            {/* Left: title + metrics */}
            <div className="details-left">
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-subtitle">{project.subtitle}</p>
              <div className="proj-metrics">
                {project.metrics.map((m) => (
                  <div key={m.label} className="proj-metric">
                    <span className="pmet-val">{m.value}</span>
                    <span className="pmet-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: buttons + description + tags */}
            <div className="details-right">
              <div className="proj-btns">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="pbtn pbtn-live">
                    <FiExternalLink /> Live
                  </a>
                ) : (
                  <span className="pbtn pbtn-live" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                    Under Development
                  </span>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="pbtn pbtn-code">
                    <FiGithub /> Code
                  </a>
                )}
              </div>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tech.map((t) => (
                  <span key={t} className="ptag">{t}</span>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}
