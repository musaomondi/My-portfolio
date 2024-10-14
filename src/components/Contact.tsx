const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <p className="text-center lead mb-4">
          Feel free to reach out to discuss project ideas, opportunities, or
          collaborations.
        </p>
        <ul className="list-unstyled text-center">
          <li className="mb-3">
            <i className="bi bi-envelope"></i> Email:
            <a href="musaomondi7437@gmail.com" className="text-primary">
              musaomondi7437@gmail.com
            </a>
          </li>
          <li className="mb-3">
            <i className="bi bi-linkedin"></i> LinkedIn:
            <a
              href="https://www.linkedin.com/in/musa-amoke-b3bb0a88"
              className="text-primary"
            >
              linkedin.com/in/musa-amoke-b3bb0a88
            </a>
          </li>
          <li className="mb-3">
            <i className="bi bi-github"></i> GitHub:
            <a href="https://github.com/musaomondi" className="text-primary">
              github.com/musaomondi
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
