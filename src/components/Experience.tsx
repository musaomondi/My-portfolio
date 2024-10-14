import AZAFinanceLogo from "../assets/aza.jpeg";
import EKraalLogo from "../assets/e-kraal.jpeg";
import TezzaLogo from "../assets/tezza.webp";
import PodiiLogo from "../assets/podii.webp";

const Experience = () => {
  const experiences = [
    {
      company: "AZA Finance",
      logo: AZAFinanceLogo,
      title: "Senior Software Engineer",
      date: "November 2021 – September 2024",
      details: [
        "Spearheaded the development of new functionalities and enhancements such as integrating new compliance system and SARB mandate processing to AZA Finance's core financial infrastructure, improving transaction processing speed",
        "Provided mentorship, training, and support to more than 5 engineers, resulting in an improvement in code quality as measured by code reviews and fewer production bugs",
        "Optimized and refactored legacy code, reducing technical debt and improving application performance, leading to an increase in system efficiency.",
        "Delivered 95% of quarterly goals yearly thereby meeting both the business and user requirements.",
        "Led troubleshooting efforts and promptly resolved critical bugs, ensuring minimal downtime and a seamless user experience.",
        "Designed and implemented an API layer that enabled data integration with external systems",
      ],
    },
    {
      company: "Tezza Business Solutions",
      logo: TezzaLogo,
      title: "Software Engineer",
      date: "June 2019 – September 2022",
      details: [
        "Wrote and executed database scripts for migrations, ensuring data integrity during system updates.",
        "Worked closely with project managers and peer developers to develop and execute strategic development plans.",
        "Estimated tasks, participated in Scrum meetings, and contributed to agile project delivery.",
        "Provided maintenance support for production applications, ensuring system reliability and troubleshooting reported iossues.",
        "Developed and implemented new features, documenting progress and writing comprehensive reports for stakeholders.",
      ],
    },
    {
      company: "E-kraal Innovation Hub",
      logo: EKraalLogo,
      title: "Software Engineer",
      date: "September 2020 – January 2022",
      details: [
        "Researched and developed web applications.",
        "Collaborated with project managers to prioritize and plan development strategies.",
        "Participated in scrum meetings and task estimation.",
        "Fixed bugs and implemented new features for production applications.",
      ],
    },
    {
      company: "PodiiHq",
      logo: PodiiLogo,
      title: "Software Developer",
      date: "January – April 2018",
      details: [
        "Contributed to the development of client projects and internal websites.",
        "Debugged and fixed complex application errors.",
        "Collaborated on open-source projects on Agile Ventures.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section py-5 bg-light">
      <div className="container">
        <h2 className="mb-5 text-center">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`timeline-item mb-5 ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-content d-flex">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo me-3"
                />
                <div>
                  <h4 className="text-primary">{experience.company}</h4>
                  <h5>{experience.title}</h5>
                  <p className="text-muted">{experience.date}</p>
                  <ul className="mt-3">
                    {experience.details.map((detail, idx) => (
                      <li key={idx} className="mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
