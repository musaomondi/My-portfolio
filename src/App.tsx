import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <AboutMe />
          <Skills />
          <Experience />
          {/* <Projects /> */}
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
