function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main>

      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <header className="top-nav">

        <button
          className="top-brand"
          onClick={() => scrollToSection("home")}
        >
          KINGSBEN
        </button>

        <nav className="top-links">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("education")}>
            Education
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </nav>

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section id="home" className="hero-section">

        {/* Original background image */}
        <div className="hero-background"></div>

        {/* Helps the text stand out without blurring the image */}
        <div className="hero-readability"></div>


        <div className="hero-content">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="hero-copy">

            <p className="hero-label">
              COMPUTER ENGINEERING STUDENT
            </p>


            <h1 className="hero-title">

              <span className="hero-first-name">
                KINGSBEN
              </span>

              <span className="hero-last-name">
                OFOSU AMOAKO
              </span>

            </h1>


            <p className="hero-description">
              I build practical digital experiences and
              engineering solutions through software,
              hardware and modern technology.
            </p>


            <div className="hero-buttons">

              <button
                className="brown-button"
                onClick={() => scrollToSection("work")}
              >
                <span>
                  View My Work
                </span>

                <span className="button-arrow">
                  ↗
                </span>
              </button>


              <button
                className="outline-button"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </button>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE — SMALLER GLASS CARD
          ================================================== */}

          <div className="hero-info-card">

            <div className="hero-card-top">

              <span className="hero-card-number">
                01
              </span>

              <span className="hero-card-label">
                WHAT I BUILD
              </span>

            </div>


            <div className="hero-card-main">

              <h2 className="hero-card-title">

                <span>
                  Software
                </span>

                <span>
                  Hardware
                </span>

                <span>
                  Systems
                </span>

              </h2>


              <div className="hero-card-line"></div>


              <p className="hero-card-description">

                Web Development
                <span>•</span>
                Mobile Apps

                <br />

                Embedded Systems
                <span>•</span>
                Engineering

              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================== */}

        <button
          className="hero-scroll"
          onClick={() => scrollToSection("about")}
        >

          <span className="scroll-line"></span>

          <span>
            SCROLL TO EXPLORE
          </span>

        </button>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="light-section about-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <div className="heading-meta">

              <span className="section-number">
                02
              </span>

              <p className="section-label">
                GET TO KNOW ME
              </p>

            </div>

            <h2>
              About
              <span> Me.</span>
            </h2>

          </div>


          <div className="about-layout">

            <div className="about-text">

              <p className="about-large-text">
                I am{" "}
                <strong>
                  Kingsben Ofosu Amoako
                </strong>
                , a Computer Engineering student at{" "}
                <strong>
                  Ghana Communication Technology University.
                </strong>
              </p>


              <p>
                I am interested in technology, software
                development, hardware and computer systems.
                I enjoy turning what I learn into practical
                projects.
              </p>


              <p>
                My goal is to continue developing my technical
                skills while building useful and meaningful
                digital solutions.
              </p>

            </div>


            <div className="liquid-card">

              <div className="liquid-glow"></div>

              <span className="liquid-number">
                01
              </span>

              <p className="liquid-label">
                MY APPROACH
              </p>

              <h3>
                Learn.
                <br />
                Build.
                <br />
                Improve.
              </h3>

              <p className="liquid-description">
                I believe practical experience is one of the
                best ways to understand technology.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section
        id="education"
        className="cream-section education-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <div className="heading-meta">

              <span className="section-number">
                03
              </span>

              <p className="section-label">
                MY ACADEMIC JOURNEY
              </p>

            </div>

            <h2>
              Education
              <span> & Learning.</span>
            </h2>

          </div>


          <div className="education-feature">

            <div className="education-main">

              <span className="education-number">
                01
              </span>

              <p className="education-category">
                COMPUTER ENGINEERING
              </p>

              <h3>
                Ghana Communication
                <br />
                Technology University
              </h3>

              <p className="education-description">
                Studying Computer Engineering with a focus
                on programming, computer systems, networking,
                electronics, hardware and embedded systems.
              </p>

            </div>


            <div className="education-side">

              <div className="learning-item">

                <span>
                  02
                </span>

                <div>

                  <p>
                    BOOTCAMP
                  </p>

                  <h4>
                    ERA AXIS System Bootcamp
                  </h4>

                  <small>
                    Practical digital skills and project
                    development.
                  </small>

                </div>

              </div>


              <div className="learning-item">

                <span>
                  03
                </span>

                <div>

                  <p>
                    SELF DEVELOPMENT
                  </p>

                  <h4>
                    Continuous Learning
                  </h4>

                  <small>
                    Building projects and learning modern
                    technologies.
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="light-section skills-section"
      >

        <div className="section-container">

          <div className="section-heading">

            <div className="heading-meta">

              <span className="section-number">
                04
              </span>

              <p className="section-label">
                TECHNOLOGIES & TOOLS
              </p>

            </div>

            <h2>
              My
              <span> Skills.</span>
            </h2>

          </div>


          <div className="skills-grid">

            <div className="skill-card">

              <span>
                01
              </span>

              <h3>
                Web Development
              </h3>

              <p>
                HTML • CSS • JavaScript • React • Vite
              </p>

            </div>


            <div className="skill-card">

              <span>
                02
              </span>

              <h3>
                Programming
              </h3>

              <p>
                C • Dart • JavaScript
              </p>

            </div>


            <div className="skill-card">

              <span>
                03
              </span>

              <h3>
                Mobile Development
              </h3>

              <p>
                Flutter • Dart • Mobile Applications
              </p>

            </div>


            <div className="skill-card">

              <span>
                04
              </span>

              <h3>
                Engineering
              </h3>

              <p>
                Embedded Systems • Electronics • IoT
              </p>

            </div>


            <div className="skill-card">

              <span>
                05
              </span>

              <h3>
                Networking
              </h3>

              <p>
                Computer Networks • Cisco • Networking
              </p>

            </div>


            <div className="skill-card">

              <span>
                06
              </span>

              <h3>
                Development Tools
              </h3>

              <p>
                Git • GitHub • VS Code • Proteus
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
      ====================================================== */}

      <section
        id="work"
        className="brown-section"
      >

        <div className="section-container">

          <div className="section-heading work-heading">

            <div className="heading-meta work-meta">

              <span className="section-number work-number">
                05
              </span>

              <p className="section-label work-label">
                SELECTED PROJECTS
              </p>

            </div>


            <h2 className="work-title">

              <span className="selected-word">
                Selected
              </span>

              <span className="work-word">
                Work.
              </span>

            </h2>

          </div>


          <div className="projects-grid">

            <article className="project-card">

              <span className="project-number">
                01
              </span>

              <div className="project-content">

                <p>
                  WEB DEVELOPMENT
                </p>

                <h3>
                  Personal Portfolio
                </h3>

                <span>
                  React • Vite • CSS
                </span>

              </div>

              <span className="project-arrow">
                ↗
              </span>

            </article>


            <article className="project-card">

              <span className="project-number">
                02
              </span>

              <div className="project-content">

                <p>
                  MOBILE DEVELOPMENT
                </p>

                <h3>
                  Flutter Applications
                </h3>

                <span>
                  Flutter • Dart
                </span>

              </div>

              <span className="project-arrow">
                ↗
              </span>

            </article>


            <article className="project-card">

              <span className="project-number">
                03
              </span>

              <div className="project-content">

                <p>
                  ENGINEERING
                </p>

                <h3>
                  Embedded Systems
                </h3>

                <span>
                  Electronics • Microcontrollers
                </span>

              </div>

              <span className="project-arrow">
                ↗
              </span>

            </article>


            <article className="project-card">

              <span className="project-number">
                04
              </span>

              <div className="project-content">

                <p>
                  DATABASE
                </p>

                <h3>
                  Inventory Manager
                </h3>

                <span>
                  SQLite • Application Development
                </span>

              </div>

              <span className="project-arrow">
                ↗
              </span>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-container">

          <div className="contact-intro">

            <span className="section-number">
              06
            </span>

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              Let's
              <br />
              <span>
                connect.
              </span>
            </h2>

            <p className="contact-description">
              Have a project, opportunity or technology
              idea you'd like to discuss? Feel free to
              reach out.
            </p>

          </div>


          <div className="contact-cards">

            <a
              href="mailto:kingsbenamoako@gmail.com"
              className="contact-card"
            >

              <div className="contact-icon">
                @
              </div>

              <div className="contact-card-content">

                <span>
                  Email
                </span>

                <strong>
                  kingsbenamoako@gmail.com
                </strong>

              </div>

              <div className="contact-card-arrow">
                ↗
              </div>

            </a>


            <a
              href="tel:+233592997969"
              className="contact-card"
            >

              <div className="contact-icon">
                TEL
              </div>

              <div className="contact-card-content">

                <span>
                  Phone
                </span>

                <strong>
                  +233 59 299 7969
                </strong>

              </div>

              <div className="contact-card-arrow">
                ↗
              </div>

            </a>


            <a
              href="https://www.linkedin.com/in/kingsben-amoako-765b23344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                in
              </div>

              <div className="contact-card-content">

                <span>
                  LinkedIn
                </span>

                <strong>
                  kingsben-amoako
                </strong>

              </div>

              <div className="contact-card-arrow">
                ↗
              </div>

            </a>


            <a
              href="https://github.com/Kingsben"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <div className="contact-icon">
                GH
              </div>

              <div className="contact-card-content">

                <span>
                  GitHub
                </span>

                <strong>
                  github.com/Kingsben
                </strong>

              </div>

              <div className="contact-card-arrow">
                ↗
              </div>

            </a>

          </div>

        </div>


        <footer className="footer">

          <span>
            KINGSBEN OFOSU AMOAKO
          </span>

          <span>
            COMPUTER ENGINEERING
          </span>

          <span>
            GHANA COMMUNICATION TECHNOLOGY UNIVERSITY
          </span>

          <span>
            © 2026
          </span>

        </footer>

      </section>

    </main>
  );
}

export default Home;