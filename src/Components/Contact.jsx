function Contact() {
  return (
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

    </section>
  );
}

export default Contact;
