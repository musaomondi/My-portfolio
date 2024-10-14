import profileImage from "../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <p>Hi there, I'm</p>
            <h1>Musa Amoke</h1>
            <h4>Senior Software Engineer</h4>
            <p className="lead about-text">
              A Senior Software Engineer with 5+ years of experience and a
              strong background in building scalable applications and
              client-server solutions using Ruby, Ruby on Rails, RESTful APIs,
              and modern JavaScript frameworks. Besides, I'm a strong
              communicator, problem solver, and collaborator, with a proven
              ability to work effectively both within a team and independently.
              I thrive in environments where clear communication and teamwork
              are essential, but I'm equally comfortable taking ownership of
              tasks and driving them to completion.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded-pill profile-image mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
