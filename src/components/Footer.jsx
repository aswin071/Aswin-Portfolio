import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-name">aswin</span>
          <span className="logo-dot">.dev</span>
        </div>
        <p className="footer-copy">
          Made with <FiHeart className="heart" /> by Aswin K &mdash; &copy; {year}
        </p>
        <div className="footer-socials">
          <a href="https://github.com/aswin071?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/aswin-k-41740b250/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:aswinjikz05@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
