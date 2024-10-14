const Header = () => {
  return (
    <section id="header" className="bg-light py-3 fixed-top">
      <nav className="container d-flex">
        <ul className="nav">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link">
              Experience
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
