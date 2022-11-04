import React, { useState } from "react";
import LoginSignUpHeader from "./LoginSignUpHeader";
import {useHistory} from 'react-router-dom'
import SignUp from "./SignUp";
import '../styles/RegistrationStyles.css';

export default function Registration({isLoginPage}) {

    const [displayLogin, setDisplayLogin] = useState(isLoginPage);
    const history = useHistory();

    // console.log("signup" + isLoginPage);


    const toggleLogin = () => {
        setDisplayLogin(true);
        history.push('/login')
      window.location.reload()
    }

    const toggleSignin = () => {
        setDisplayLogin(false);
        history.push('/signup')
      window.location.reload()
    }

    return (
        <div>
            <LoginSignUpHeader displayPage={displayLogin} handleClickLogin={toggleLogin} handleClickSignin={toggleSignin} />
            <img className="bg-illustration1" src="./Images/bg-illustration1.png" />
            <img className="bg-illustration2" src="./Images/bg-illustration2.png" />
            <SignUp />
            <img className="bg-illustration3" src="./Images/bg-illustration3.png" />
        </div>
    )
}