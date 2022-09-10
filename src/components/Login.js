import React, { useState } from "react";
import '../styles/SignUpStyles.css'

export default function Login() {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
        userType: "end-user"
    })

    function handleChange(event) {
        const {name, value, style} = event.target;
        
        let isError = validateForm(name, value);
        isError ? style.outline = "2px solid red" : style.outline = "2px solid black";

        setLoginDetails(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    function validateForm(name, value) {
        if(name === "email")
            return value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ? false : true;

        if(name === "password")
            return value.match(/[^ ]{6}/) ? false : true;
    }

    function loginUser() {
        // Code to authenticate user and display pages based on user type
    }

    return (
        <div className="login--container">
            <div>
                <h1 className="signUp--head">LOG IN</h1>
                <h5 className="signUp--head">STAY UPDATED ON THE FINANCIAL WORLD</h5>
            </div>
            <form className="signUp--form">
                <input type={"email"} placeholder="Email ID" className="form--input" name="email" onChange={handleChange}></input>
                <input type={"password"} placeholder="Password" className="form--input" name="password" onChange={handleChange}></input>
                <fieldset className="form--radioInput">
                    <legend className="form--radioInput--legend">User Type</legend>
                    <input type={"radio"} name="userType" id="endUser" value="end-user" checked={loginDetails.userType === "end-user"} onChange={handleChange}></input>
                    <label htmlFor="endUser">General</label>
                    <input type={"radio"} name="userType" id="advisor" value="financial-advisor" checked={loginDetails.userType === "financial-advisor"} onChange={handleChange}></input>
                    <label htmlFor="advisor">Advisor</label>
                    <input type={"radio"} name="userType" id="student" value="student" checked={loginDetails.userType === "student"} onChange={handleChange}></input>
                    <label htmlFor="student">Student</label>
                </fieldset>
                <a href="#" className="form--forgotPass">Forgot your Password?</a>
                <button className="form--submit" onClick={loginUser}>Login</button>
            </form>
        </div>
    )
    
}