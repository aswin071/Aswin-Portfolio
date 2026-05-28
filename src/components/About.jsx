import { personalInfo } from '../data/portfolio';
import { FiLinkedin, FiGithub, FiMail, FiPhone } from 'react-icons/fi';
import './About.css';

const socials = [
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/aswin-k' },
  { icon: <FiGithub />,   label: 'GitHub',   href: 'https://github.com/aswin-k' },
  { icon: <FiMail />,     label: 'Email',    href: 'mailto:aswinjikz05@gmail.com' },
  { icon: <FiPhone />,    label: 'Phone',    href: 'tel:+919567365762' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left column */}
          <div className="about-left">
            <div className="about-avatar-wrap">
              <div className="about-avatar">
                <span className="avatar-initials">AK</span>
                <div className="avatar-ring" />
                <div className="avatar-ring ring-2" />
              </div>
            </div>
            <h2 className="about-name">Aswin K</h2>
            <p className="about-role gradient-text">Web Developer & Product Builder</p>

            <div className="about-approach">
              <p className="approach-label">My approach to work is</p>
              <p className="italic-accent approach-value">
                performance, precision, and scalability.
              </p>
            </div>

            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="about-right">
            <div className="section-eyebrow">About Me</div>
            <h3 className="about-heading">
              Your idea, taken from{' '}
              <span className="gradient-text">zero</span>,<br />
              to a product <span className="italic-accent">people actually use</span>.
            </h3>
            <div className="divider" />

            <p className="about-bio">
              I'm a developer with <strong>3 years of experience</strong> building web products
              that businesses depend on. Currently at <strong>Webandcrafts</strong>, I build
              enterprise tools used daily by sales, HR, and finance teams — handling everything
              from the interface people click to the systems running quietly behind it.
            </p>
            <p className="about-bio">
              I handle the whole product — what your customers see, how fast it loads, how
              reliably it runs, and how it scales as you grow. I've also shipped an
              AI-powered voice agent that holds real conversations with users autonomously.
            </p>
            <p className="about-bio">
              I believe in writing clean, testable code and designing systems that are built to last.
              Research and problem-solving are at the core of how I approach every challenge.
            </p>

            <div className="about-tags">
              {['Open to Opportunities', 'Remote Friendly', 'Full-time', 'Freelance'].map(t => (
                <span key={t} className="about-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
