import React, { useState } from "react";
import LoginSignUpHeader from "./LoginSignUpHeader";
import SignUp from "./SignUp";
import Login from "./Login";
import '../styles/RegistrationStyles.css';

export default function Registration() {

    const [displayLogin, setDisplayLogin] = useState(true);

    const toggleLogin = () => {
        setDisplayLogin(prevState => !prevState);
    }

    return (
        <div>
            <LoginSignUpHeader displayPage={displayLogin} handleClick={toggleLogin} />
            <img className="bg-illustration1" src="./Images/bg-illustration1.png" />
            <img className="bg-illustration2" src="./Images/bg-illustration2.png" />
            {displayLogin ? <Login /> : <SignUp />}
            <img className="bg-illustration3" src="./Images/bg-illustration3.png" />
        </div>
    )
}