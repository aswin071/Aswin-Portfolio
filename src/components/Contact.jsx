import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiPhone } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aswinjikz05@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <div className="contact-left">
            <div className="section-eyebrow">Get In Touch</div>
            <h2 className="section-title contact-title">
              Let's build something{' '}
              <span className="gradient-text">amazing</span>{' '}
              <span className="italic-accent">together.</span>
            </h2>
            <div className="divider" />

            <p className="contact-desc">
              Whether you have a project in mind, want to discuss a role, or just 
              want to say hi — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:aswinjikz05@gmail.com" className="contact-link-card">
                <FiMail className="contact-icon" />
                <div>
                  <span className="link-label">Email</span>
                  <span className="link-value">aswinjikz05@gmail.com</span>
                </div>
              </a>
              <a href="tel:+919567365762" className="contact-link-card">
                <FiPhone className="contact-icon" />
                <div>
                  <span className="link-label">Phone</span>
                  <span className="link-value">+91 9567365762</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/aswin-k-41740b250/"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <FiLinkedin className="contact-icon" />
                <div>
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Aswin K</span>
                </div>
              </a>
              <a
                href="https://github.com/aswin071?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <FiGithub className="contact-icon" />
                <div>
                  <span className="link-label">GitHub</span>
                  <span className="link-value">Aswin K</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
