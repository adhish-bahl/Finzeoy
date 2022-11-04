import React from "react";
import '../styles/LoginSignUpHeaderStyles.css'
import logo from "../Images/Logo.png"

export default function LoginSignUpHeader(props) {

    // console.log(props.displayPage)

    return (
        <div className="header">
            <div className="header--title">
                <img src={logo} className="header--image" />
                <h1 className="header--name">FINZEOY</h1>
            </div>
            <div className="header--buttons">
                <button className={`header--link ${props.displayPage = "true" ? "active" : ""}`} onClick={props.handleClickLogin}>Login</button>
                <button className={`header--link ${props.displayPage = "true" ? "" : "active"}`} onClick={props.handleClickSignup}>Sign Up</button>
            </div>
        </div>
    )   
}
