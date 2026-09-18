import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-90px 0px -25% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const skills = [
    {
      title: "Programming",
      items: ["C", "C++", "Python", "Java", "JavaScript", "PHP"],
    },
    {
      title: "Web & Mobile",
      items: [
        "HTML",
        "CSS",
        "React",
        "Flutter",
        "Android Studio",
        "WordPress",
      ],
    },
    {
      title: "Hardware & Embedded",
      items: [
        "Arduino",
        "Raspberry Pi",
        "Microcontrollers",
        "Sensors",
        "Circuit Design",
      ],
    },
    {
      title: "Networking & Systems",
      items: [
        "LAN/WAN",
        "IP Configuration",
        "Cisco Packet Tracer",
        "Linux",
        "Windows",
      ],
    },
    {
      title: "Tools & Databases",
      items: [
        "VS Code",
        "Git/GitHub",
        "MySQL",
        "SQLite",
        "XAMPP",
        "Figma",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Smart Home Automation System",
      description:
        "A smart home project combining hardware, sensors and software to automate and monitor different parts of a home environment.",
      tags: ["Raspberry Pi", "Arduino", "Python", "C++", "IoT"],
    },
    {
      number: "02",
      title: "Mobile Inventory App",
      description:
        "A mobile application designed to help users manage products, stock information and inventory records in a simple way.",
      tags: ["Java", "Android", "SQLite", "UI/UX"],
    },
    {
      number: "03",
      title: "CivicVoice",
      description:
        "A community issue reporting platform that allows people to report local problems, attach photos and track the progress of reported issues.",
      tags: ["Web App", "GPS", "Photo Reports", "Community"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap');

        :root {
          --white: #ffffff;
          --background: #f5f9ff;
          --glass: rgba(255, 255, 255, 0.68);
          --text: #0f172a;
          --heading: #0b1f3a;
          --muted: #53657a;
          --light-text: #718198;
          --blue: #1769d2;
          --blue-light: #e8f2ff;
          --border: rgba(185, 207, 232, 0.65);
          --border-strong: rgba(143, 183, 225, 0.75);
          --shadow: 0 20px 60px rgba(32, 91, 151, 0.10);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "DM Sans", sans-serif;
          color: var(--text);
          background:
            radial-gradient(
              circle at 10% 5%,
              rgba(68, 153, 255, 0.14),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 12%,
              rgba(108, 192, 255, 0.12),
              transparent 26%
            ),
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f4f9ff 50%,
              #edf6ff 100%
            );
          min-height: 100vh;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .page {
          position: relative;
          min-height: 100vh;
        }

        .background-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.35;
          background-image:
            linear-gradient(
              rgba(38, 105, 170, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(38, 105, 170, 0.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
          z-index: -2;
        }

        .glow {
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(45, 137, 232, 0.08);
          filter: blur(80px);
          pointer-events: none;
          z-index: -1;
        }

        .glow.one {
          top: 12%;
          left: -180px;
        }

        .glow.two {
          right: -180px;
          top: 48%;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* NAVIGATION */

        .navbar {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 28px));
          z-index: 1000;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 12px 40px rgba(38, 89, 139, 0.08);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Manrope", sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--heading);
          white-space: nowrap;
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: linear-gradient(145deg, #ffffff, #e7f2ff);
          border: 1px solid var(--border-strong);
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 12px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.9);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-links button {
          border: 0;
          background: transparent;
          padding: 9px 13px;
          border-radius: 10px;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: var(--blue);
          background: rgba(232, 242, 255, 0.85);
        }

        .menu-button {
          display: none;
          border: 1px solid var(--border);
          background: rgba(255,255,255,.7);
          border-radius: 10px;
          padding: 9px 11px;
          cursor: pointer;
          color: var(--heading);
          font-size: 18px;
        }

        /* HERO */

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 130px 0 80px;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          align-items: center;
          gap: 60px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 12px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(255,255,255,.62);
          backdrop-filter: blur(12px);
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.4px;
          margin-bottom: 22px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2196f3;
          box-shadow: 0 0 12px rgba(33,150,243,.7);
        }

        .hero h1 {
          font-family: "Manrope", sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.98;
          letter-spacing: -4px;
          color: var(--heading);
          max-width: 900px;
          margin-bottom: 22px;
        }

        .hero h1 span {
          display: block;
          color: var(--blue);
        }

        .hero-role {
          font-family: "DM Mono", monospace;
          color: #365a7d;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero-description {
          max-width: 690px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.25s ease;
          cursor: pointer;
        }

        .primary-btn {
          color: white;
          background: linear-gradient(135deg, #1769d2, #0d58b9);
          box-shadow: 0 12px 28px rgba(23,105,210,.22);
          border: none;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(23,105,210,.28);
        }

        .secondary-btn {
          color: var(--heading);
          border: 1px solid var(--border-strong);
          background: rgba(255,255,255,.58);
          backdrop-filter: blur(12px);
        }

        .secondary-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(23,105,210,.45);
          background: rgba(255,255,255,.85);
        }

        /* RIGHT HERO CARD */

        .hero-card {
          position: relative;
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: var(--glass);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: var(--shadow);
        }

        .hero-card::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: 25px;
          pointer-events: none;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.65),
            transparent 45%
          );
        }

        .hero-card h3 {
          position: relative;
          font-family: "Manrope", sans-serif;
          font-size: 25px;
          color: var(--heading);
          margin-bottom: 12px;
        }

        .hero-card p {
          position: relative;
          color: var(--muted);
          line-height: 1.75;
          font-size: 15px;
        }

        .quick-info {
          position: relative;
          display: grid;
          gap: 10px;
          margin-top: 25px;
        }

        .info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 0;
          border-top: 1px solid rgba(181,205,230,.55);
          font-size: 12px;
        }

        .info-row span:first-child {
          color: var(--light-text);
        }

        .info-row span:last-child {
          color: var(--heading);
          font-weight: 700;
          text-align: right;
        }

        /* SECTIONS */

        section {
          scroll-margin-top: 105px;
        }

        .section {
          padding: 100px 0;
        }

        .section-heading {
          margin-bottom: 40px;
        }

        .section-label {
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 11px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .section-heading h2 {
          font-family: "Manrope", sans-serif;
          font-size: clamp(30px, 4vw, 48px);
          letter-spacing: -1.8px;
          color: var(--heading);
          margin-bottom: 10px;
        }

        .section-heading p {
          color: var(--muted);
          max-width: 650px;
          line-height: 1.75;
        }

        .glass-card {
          border: 1px solid var(--border);
          background: var(--glass);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 22px;
          box-shadow: var(--shadow);
        }

        /* ABOUT */

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .about-card {
          padding: 30px;
        }

        .about-card h3 {
          font-family: "Manrope", sans-serif;
          font-size: 21px;
          color: var(--heading);
          margin-bottom: 15px;
        }

        .about-card p {
          color: var(--muted);
          line-height: 1.85;
          font-size: 15px;
        }

        .focus-list {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 13px;
          background: rgba(238,246,255,.65);
          border: 1px solid rgba(191,215,239,.6);
          color: var(--heading);
          font-size: 13px;
          font-weight: 600;
        }

        .focus-number {
          display: grid;
          place-items: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: white;
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 10px;
          border: 1px solid var(--border);
        }

        /* EDUCATION */

        .education-card {
          padding: 30px;
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 25px;
          align-items: start;
        }

        .edu-icon {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: var(--blue-light);
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 12px;
          font-weight: 600;
        }

        .education-card h3 {
          color: var(--heading);
          font-family: "Manrope", sans-serif;
          font-size: 21px;
          margin-bottom: 7px;
        }

        .education-card .program {
          color: var(--blue);
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .education-card p {
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        /* SKILLS */

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .skill-card {
          padding: 25px;
          transition: 0.3s ease;
        }

        .skill-card:hover,
        .project-card:hover {
          transform: translateY(-4px);
          border-color: rgba(23,105,210,.35);
          box-shadow: 0 25px 65px rgba(32,91,151,.13);
        }

        .skill-card h3 {
          font-family: "Manrope", sans-serif;
          color: var(--heading);
          font-size: 17px;
          margin-bottom: 15px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag,
        .project-tag {
          padding: 7px 10px;
          border-radius: 9px;
          background: rgba(238,246,255,.8);
          border: 1px solid rgba(185,211,237,.65);
          color: #315777;
          font-family: "DM Mono", monospace;
          font-size: 10px;
        }

        /* PROJECTS */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 340px;
          padding: 27px;
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--glass);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: var(--shadow);
          transition: 0.3s ease;
          overflow: hidden;
        }

        .project-card::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          right: -75px;
          top: -75px;
          border-radius: 50%;
          background: rgba(58,145,230,.08);
        }

        .project-number {
          font-family: "DM Mono", monospace;
          color: var(--blue);
          font-size: 12px;
          margin-bottom: 35px;
        }

        .project-card h3 {
          font-family: "Manrope", sans-serif;
          color: var(--heading);
          font-size: 20px;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .project-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.75;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          padding-top: 25px;
        }

        /* CONTACT */

        .contact-card {
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .contact-card h2 {
          font-family: "Manrope", sans-serif;
          color: var(--heading);
          font-size: clamp(30px, 4vw, 45px);
          letter-spacing: -1.5px;
          margin-bottom: 12px;
        }

        .contact-card > div > p {
          color: var(--muted);
          line-height: 1.75;
          max-width: 520px;
        }

        .contact-details {
          display: grid;
          gap: 10px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          border: 1px solid rgba(185,211,237,.62);
          border-radius: 13px;
          background: rgba(255,255,255,.55);
          transition: 0.2s ease;
        }

        .contact-item:hover {
          border-color: rgba(23,105,210,.4);
          transform: translateX(3px);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: var(--blue-light);
          color: var(--blue);
          font-family: "DM Mono", monospace;
          font-size: 11px;
        }

        .contact-item small {
          display: block;
          color: var(--light-text);
          font-size: 10px;
          margin-bottom: 2px;
        }

        .contact-item span {
          color: var(--heading);
          font-size: 13px;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        /* FOOTER */

        footer {
          padding: 30px 0 45px;
        }

        .footer-line {
          height: 1px;
          background: rgba(181,205,230,.65);
          margin-bottom: 22px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: var(--light-text);
          font-size: 11px;
          font-family: "DM Mono", monospace;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-card {
            max-width: 520px;
          }

          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }

          .projects-grid .project-card:last-child {
            grid-column: span 2;
          }
        }

        @media (max-width: 800px) {
          .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            padding: 10px;
            flex-direction: column;
            align-items: stretch;
            background: rgba(255,255,255,.9);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 16px;
            box-shadow: var(--shadow);
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links button {
            text-align: left;
            padding: 12px 14px;
          }

          .menu-button {
            display: block;
          }

          .about-grid,
          .contact-card {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid .project-card:last-child {
            grid-column: auto;
          }
        }

        @media (max-width: 600px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .navbar {
            top: 9px;
            width: calc(100% - 18px);
          }

          .hero {
            padding-top: 115px;
          }

          .hero h1 {
            font-size: clamp(43px, 13vw, 65px);
            letter-spacing: -2.8px;
          }

          .hero-description {
            font-size: 15px;
          }

          .section {
            padding: 75px 0;
          }

          .about-card,
          .skill-card,
          .project-card,
          .education-card,
          .contact-card {
            padding: 23px;
          }

          .education-card {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page">
        <div className="background-grid"></div>
        <div className="glow one"></div>
        <div className="glow two"></div>

        {/* NAVIGATION */}
        <nav className="navbar">
          <div className="nav-inner">
            <button
              className="brand"
              onClick={() => scrollToSection("home")}
              style={{
                border: 0,
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <span className="brand-mark">KOA</span>
              <span>KINGSBEN</span>
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              {["home", "about", "skills", "work", "contact"].map((item) => (
                <button
                  key={item}
                  className={activeSection === item ? "active" : ""}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="container hero-layout">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                COMPUTER ENGINEERING STUDENT
              </div>

              <h1>
                KINGSBEN
                <span>OFOSU AMOAKO</span>
              </h1>

              <div className="hero-role">
                SOFTWARE · HARDWARE · EMBEDDED SYSTEMS
              </div>

              <p className="hero-description">
                I am a Computer Engineering student interested in building
                practical solutions across software, hardware, embedded
                systems and networking. I enjoy turning ideas into useful
                digital and engineering projects.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() => scrollToSection("work")}
                >
                  View My Work →
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* NO KOA BOX HERE */}
            <div className="hero-card">
              <h3>Computer Engineering</h3>

              <p>
                Combining programming, electronics and systems thinking to
                create practical technology solutions.
              </p>

              <div className="quick-info">
                <div className="info-row">
                  <span>Institution</span>
                  <span>GCTU</span>
                </div>

                <div className="info-row">
                  <span>Programme</span>
                  <span>Computer Engineering</span>
                </div>

                <div className="info-row">
                  <span>Focus</span>
                  <span>Software + Hardware</span>
                </div>

                <div className="info-row">
                  <span>Location</span>
                  <span>Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">01 / About</div>

              <h2>Engineering with purpose.</h2>

              <p>
                A growing technical portfolio built around learning,
                experimentation and solving real-world problems.
              </p>
            </div>

            <div className="about-grid">
              <div className="glass-card about-card">
                <h3>About Me</h3>

                <p>
                  I am KINGSBEN OFOSU AMOAKO, a Computer Engineering student at
                  Ghana Communication Technology University. My interests
                  cover software development, hardware, embedded systems,
                  networking and technology.
                </p>
              </div>

              <div className="glass-card about-card">
                <h3>Areas of Interest</h3>

                <div className="focus-list">
                  <div className="focus-item">
                    <span className="focus-number">01</span>
                    Software Development
                  </div>

                  <div className="focus-item">
                    <span className="focus-number">02</span>
                    Embedded Systems & IoT
                  </div>

                  <div className="focus-item">
                    <span className="focus-number">03</span>
                    Hardware & Electronics
                  </div>

                  <div className="focus-item">
                    <span className="focus-number">04</span>
                    Networking & Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">02 / Education</div>

              <h2>Academic foundation.</h2>
            </div>

            <div className="glass-card education-card">
              <div className="edu-icon">GCTU</div>

              <div>
                <h3>Ghana Communication Technology University</h3>

                <div className="program">Computer Engineering</div>

                <p>
                  Studying computer engineering with a focus on the connection
                  between software, computer systems, electronics, hardware
                  and communication technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">03 / Skills</div>

              <h2>Technical toolkit.</h2>

              <p>
                Technologies and tools I use while learning and building
                software and engineering projects.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="glass-card skill-card" key={skill.title}>
                  <h3>{skill.title}</h3>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">04 / Selected Work</div>

              <h2>Projects I've built.</h2>

              <p>
                Practical projects combining programming, hardware,
                connectivity and user-focused problem solving.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="glass-card contact-card">
              <div>
                <div className="section-label">05 / Contact</div>

                <h2>Let's connect.</h2>

                <p>
                  Have a project, opportunity or technology idea you'd like to
                  discuss? Feel free to reach out.
                </p>
              </div>

              <div className="contact-details">
                <a
                  className="contact-item"
                  href="mailto:kingsbenamoako@gmail.com"
                >
                  <div className="contact-icon">@</div>

                  <div>
                    <small>Email</small>
                    <span>kingsbenamoako@gmail.com</span>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href="tel:+233592997969"
                >
                  <div className="contact-icon">TEL</div>

                  <div>
                    <small>Phone</small>
                    <span>+233 59 299 7969</span>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href="https://www.linkedin.com/in/kingsben-amoako-765b23344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon">in</div>

                  <div>
                    <small>LinkedIn</small>
                    <span>kingsben-amoako</span>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href="https://github.com/Kingsben"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon">GH</div>

                  <div>
                    <small>GitHub</small>
                    <span>github.com/Kingsben</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="container">
            <div className="footer-line"></div>

            <div className="footer-content">
              <span>
                © {new Date().getFullYear()} KINGSBEN OFOSU AMOAKO
              </span>

              <span>COMPUTER ENGINEERING · GHANA</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;