import React, {useState} from "react";
import PageHeader from "./PageHeader";
import '../styles/GeneralUserHomeStyles.css';

export default function GeneralUserHomePage(props) {

    const [displayPage, setDisplayPage] = useState("Tracker");

    const togglePage = (event) => {
        setDisplayPage(event.target.innerHTML);
    }

    return (
        <div className="general--homePage">
            <PageHeader headerItems={["Tracker", "Feed"]} displayPage={displayPage} handleClick={togglePage} username={props.username} />
        </div>
    )
}