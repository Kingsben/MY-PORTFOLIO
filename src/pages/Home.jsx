import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="hero">
        <div className="hero-background" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-glass">
            <div className="hero-topline">
              <span>COMPUTER ENGINEERING</span>
              <span className="status">
                <i />
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <div className="hero-main">
              <div className="hero-copy">
                <p className="eyebrow">HELLO, I'M</p>

                <h1>
                  KINGSBEN
                  <span>OFOSU AMOAKO</span>
                </h1>

                <h2>Computer Engineering Student</h2>

                <p className="hero-description">
                  I build and explore software, hardware and embedded
                  technology with a focus on practical solutions and clean
                  digital experiences.
                </p>

                <div className="hero-actions">
                  <Link to="/work" className="primary-button">
                    View My Work
                    <span>↗</span>
                  </Link>

                  <Link to="/contact" className="secondary-button">
                    Contact Me
                  </Link>
                </div>
              </div>

              <div className="hero-info glass-panel">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M8 21h8" />
                    <path d="M12 19v2" />
                  </svg>
                </div>

                <p>FOCUS</p>

                <h3>
                  Software
                  <br />
                  Hardware
                  <br />
                  Embedded Systems
                </h3>

                <div className="info-line" />

                <span>Ghana Communication Technology University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-bottom">
        <div className="mini-glass">
          <span>01</span>
          <div>
            <strong>Engineering</strong>
            <p>Technology • Systems • Innovation</p>
          </div>
        </div>

        <div className="mini-glass">
          <span>02</span>
          <div>
            <strong>Development</strong>
            <p>Web • Mobile • Software</p>
          </div>
        </div>

        <div className="mini-glass">
          <span>03</span>
          <div>
            <strong>Hardware</strong>
            <p>Arduino • Raspberry Pi • IoT</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;