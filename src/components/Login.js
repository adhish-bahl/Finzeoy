import React, { useState } from "react";
import '../styles/SignUpStyles.css'

export default function Login() {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
        userType: "end-user"
    })

    function handleChange(event) {
        // validation code        
        const {name, value} = event.target;
        setLoginDetails(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
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
                    <label htmlFor="endUser">End User</label>
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