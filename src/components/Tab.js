import { Link } from "react-router-dom";

const Tab = ({sectionName, tabName}) => {

    return (
        <div className="tab">
           <Link to={"/" + sectionName}>{tabName}</Link>
        </div>
    )
}

export default Tab;