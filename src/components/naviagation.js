import Tab from './Tab.js';

const Navigation = () => {

    
    return (
        <div className="navigation">
            <div className='logo'>
                logo
            </div>
            <div className='tabs'>
                <Tab sectionName="about" tabName="About Me"/>
                <Tab sectionName="projects" tabName="Projects"/>
                <Tab sectionName="contact" tabName="Contact"/>
            </div>
        </div>
    )
}

export default Navigation;