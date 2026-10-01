import About from "../Components/About";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import Work from "../Components/Work";

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

      <header className="top-nav">

        <button
          className="top-brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <img
            src="/logo.png"
            alt="Kingsben logo"
            className="top-logo"
          />

          <span className="brand-name">KINGSBEN</span>
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

      <section id="home" className="hero-section">

        <div className="hero-background"></div>

        <div className="hero-readability"></div>

        <div className="hero-content">

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
                Mobile Applications

                <br />

                Embedded Systems
                <span>•</span>
                Engineering

              </p>

            </div>

          </div>

        </div>

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

      <About />
      <Education />
      <Skills />
      <Work />
      <Contact />
      <Footer />

    </main>
  );
}

export default Home;