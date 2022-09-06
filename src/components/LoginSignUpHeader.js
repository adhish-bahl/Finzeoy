import React from "react";
import '../styles/LoginSignUpHeaderStyles.css'

export default function LoginSignUpHeader(props) {

    return (
        <div className="header">
            <div className="header--title">
                <img src="./Images/default_logo.png" className="header--image" />
                <h1 className="header--name">FINZEOY</h1>
            </div>
            <div className="header--buttons">
                <button className={`header--link ${props.displayPage} ? "active" : ""}`} onClick={props.handleClick}>Login</button>
                <button className={`header--link ${props.displayPage} ? "active" : ""}`} onClick={props.handleClick}>Sign Up</button>
            </div>
        </div>
    )
}
