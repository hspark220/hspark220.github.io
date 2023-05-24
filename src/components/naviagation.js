import Tab from './Tab.js';

const Navigation = () => {

    
    return (
        <div className="navigation">
            <div className='logo'>
                <Tab sectionName="" tabName="logo"/>
            </div>
            <div className='tabs'>
                <Tab sectionName="about" tabName="About Me"/>
                <Tab sectionName="projects" tabName="Projects"/>
            </div>
        </div>
    )
}

export default Navigation;