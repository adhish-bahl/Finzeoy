import React, { useState } from "react";
import LoginSignUpHeader from "./LoginSignUpHeader";
import {useHistory} from 'react-router-dom'
import Login from "./Login";
import '../styles/RegistrationStyles.css';

export default function Registration({isLoginPage}) {

    const [displayLogin, setDisplayLogin] = useState(isLoginPage);
    const history = useHistory();


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
            <LoginSignUpHeader displayPage={displayLogin} handleClickLogin={toggleLogin} handleClickSignup={toggleSignin} />
            <img className="bg-illustration1" src="./Images/bg-illustration1.png" />
            <img className="bg-illustration2" src="./Images/bg-illustration2.png" />
            <Login />
            <img className="bg-illustration3" src="./Images/bg-illustration3.png" />
        </div>
    )
}