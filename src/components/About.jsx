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
            <p className="about-role gradient-text">Python Full Stack Developer</p>

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
              Building systems that{' '}
              <span className="gradient-text">scale</span>,<br />
              not just software that <span className="italic-accent">works</span>.
            </h3>
            <div className="divider" />

            <p className="about-bio">
              I'm a Python Full Stack Developer with <strong>3 years of experience</strong> designing
              and building high-performance web applications. Currently at{' '}
              <strong>Webandcrafts</strong>, I architect full-stack solutions for enterprise-grade
              ERP systems, processing <strong>50,000+ background jobs daily</strong> via RabbitMQ.
            </p>
            <p className="about-bio">
              My expertise spans across <strong>Django &amp; FastAPI</strong> for backends, 
              <strong> React.js</strong> for frontends, and cloud infrastructure on <strong>AWS</strong>. 
              I'm equally passionate about AI integrations — having built a Gemini-powered voice agent
              that handles real-time matrimonial matchmaking calls.
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
