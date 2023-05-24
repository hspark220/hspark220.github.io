import Navigation from "./components/Naviagation";
import { SocialIcon } from 'react-social-icons';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="main">
        <div className="header">
          learning to code, trying to make a protfolio website...
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
