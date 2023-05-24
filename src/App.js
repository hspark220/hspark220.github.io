import Navigation from "./components/naviagation";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { SocialIcon } from 'react-social-icons';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="main">
        <div className="header">
        </div>
        <div className="projects">

        </div>
        <div className="footer" id="contact">
            contact
            <p>email: hspark220@gmail.com </p>
            {/* icons */}
            <SocialIcon url="https://github.com/hspark220" />
            <SocialIcon url="https://www.linkedin.com/in/heonsoopark/" />
        </div>
      </div>
      
    </>
  )
}

export default App;
