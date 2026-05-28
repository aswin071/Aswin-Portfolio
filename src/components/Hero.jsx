import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#c026d3' : '#7c3aed';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-content">
        <div className="hero-left">
          <p className="hero-eyebrow animate-fadeUp">
            <span className="italic-accent">hello world</span>
          </p>

          <h1 className="hero-headline animate-fadeUp animate-delay-1">
            I <span className="gradient-text">build</span> &amp; craft{' '}
            <br />
            scalable backends{' '}
            <br />
            <span className="italic-accent">that power your product</span>
          </h1>

          <div className="hero-actions animate-fadeUp animate-delay-3">
            <Link to="projects" smooth duration={700} offset={-80}>
              <button className="btn-primary">
                <span>See Projects</span>
                <FiArrowRight />
              </button>
            </Link>
            <a
              href="/Aswin_K_Resume.pdf"
              download="Aswin_K_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiFileText />
              Resume
            </a>
          </div>

          <div className="hero-stats animate-fadeUp animate-delay-4">
            <div className="stat">
              <span className="stat-number gradient-text">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-right animate-fadeUp animate-delay-2">
          <p className="hero-bio-plain">
            {personalInfo.bio}
          </p>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
