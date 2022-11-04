import React from "react";
import '../styles/LoginSignUpHeaderStyles.css'
import '../styles/PageHeaderStyles.css'
import logo from "../Images/Logo.png"


export default function PageHeader(props) {

    const headerItems = props.headerItems.map(item => {
        return <button className={`header--link ${props.displayPage === item ? "page--active" : ""}`} onClick={event => props.handleClick(event)}>{item}</button>
    })

    return (
        <div className="header">
            <div className="header--title">
                <img src={logo} className="header--image" />
                <h1 className="header--name">FINZEOY</h1>
            </div>

            <div className="header--right">
                <div className="header--buttons">
                    {headerItems}
                    <h3 className="profile--name">{props.username}</h3>
                    <img className="profile--logo" src="./Images/profile_logo.png" />
                </div>
            </div>
        </div>
    )
}