const Projects = () => {
  const projects = [
    {
      name: "SARB Mandate System",
      link: "#",
      description:
        "Developed a comprehensive regulatory system for South Africa's Reserve Bank to handle mandates and regulatory reporting efficiently.",
    },
    {
      name: "Baselink Group",
      link: "https://baselinkgroup.com/",
      description:
        "Contributed to the development of a client-facing web solution for Baselink Group, improving customer experience and digital operations.",
    },
    {
      name: "PodiiHq Website",
      link: "https://podiihq.com/",
      description:
        "Worked on PodiiHq's corporate website and contributed to open-source projects on Agile Venture.",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <a href={project.link} className="card-link">
                    {project.link}
                  </a>
                  <p className="card-text mt-3">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
