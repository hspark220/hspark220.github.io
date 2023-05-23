import Navigation from "./components/naviagation";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="main">
        <About />
        <Projects />
        <Contact />
      </div>
      
    </>
  )
}

export default App;
