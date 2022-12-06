import "./about.css";

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
      </div>

      <h2 style={{ textAlign: "center" }}className = 'aboutTitle'>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Jane"
            //   style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p className="containerDesc">Some text that describes me lorem ipsum ipsum lorem.</p>
              <p className="containerMail">jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Mike"
            //   style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p className="containerDesc">Some text that describes me lorem ipsum ipsum lorem.</p>
              <p className="containerMail">mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="John"
            //   style={{ width: "100%" }}
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p className="containerDesc">Some text that describes me lorem ipsum ipsum lorem.</p>
              <p className="containerMail">john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
