const Tab = ({sectionName, tabName}) => {

    return (
        <div className="tab">
            <a href={"#"+sectionName}>{tabName}</a>
        </div>
    )
}

export default Tab;