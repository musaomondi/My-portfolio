import { useEffect } from "react";

const Skills = () => {
  const technicalSkills = [
    { name: "Ruby", proficiency: 95 },
    { name: "Ruby on Rails", proficiency: 95 },
    { name: "JavaScript", proficiency: 85 },
    { name: "React", proficiency: 80 },
    { name: "PostgreSQL", proficiency: 90 },
    { name: "Bootstrap", proficiency: 80 },
    { name: "Stimulus", proficiency: 70 },
    { name: "RSpec", proficiency: 85 },
    { name: "RESTful APIs", proficiency: 90 },
    { name: "Git/GitHub", proficiency: 95 },
    { name: "Agile Methodologies", proficiency: 80 },
  ];

  const softSkills = [
    { name: "Problem Solving", proficiency: 90 },
    { name: "Communication", proficiency: 85 },
    { name: "Team Collaboration", proficiency: 88 },
    { name: "Mentorship", proficiency: 80 },
    { name: "Adaptability", proficiency: 85 },
  ];

  useEffect(() => {
    const skillItems = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItems.forEach((item) => observer.observe(item));

    return () => {
      skillItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="skills" className="skills-section bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h4 className="mb-3 text-center">Technical Skills</h4>
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-3 d-flex align-items-center skill-item"
              >
                <h6 className="flex-grow-1">{skill.name}</h6>
                <div className="progress w-75">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${skill.proficiency}%` }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-5">
            <h4 className="mb-3 text-center">Soft Skills</h4>
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="mb-3 d-flex align-items-center skill-item"
              >
                <h6 className="flex-grow-1">{skill.name}</h6>
                <div className="progress w-75">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: `${skill.proficiency}%` }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
