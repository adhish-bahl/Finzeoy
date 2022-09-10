import React, { useState } from "react";
import '../styles/SignUpStyles.css'

export default function SignUp() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phno: "",
        userType: "none",
        password: "",
    });

    function handleChange(event) {
        const {name, value, style} = event.target;

        let isError = validateForm(name, value);
        isError ? style.outline = "2px solid red" : style.outline = "2px solid black";

        setUserDetails(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    function validateForm(name, value) {
        if(name === "name")
            return value.match(/^[a-z][a-z\s]*$/i) ? false : true;
        
        if(name === "email")
            return value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ? false : true;

        if(name === "phno")
            return value.match(/^\d{10}$/) ? false : true;

        if(name === "password")
            return value.match(/[^ ]{6}/) ? false : true;
    }

    function saveFormData() {
        // Code to call backend server and save data
    }

    return (
        <div className="signUp--container">
            <div>
                <h1 className="signUp--head">SIGN UP</h1>
                <h5 className="signUp--head">STAY UPDATED ON THE FINANCIAL WORLD</h5>
            </div>
            <form className="signUp--form">
                <input type={"text"} placeholder="Name" className="form--input" name="name" value={userDetails.name} onChange={handleChange}></input>
                <input type={"email"} placeholder="Email ID" className="form--input" name="email" value={userDetails.email} onChange={handleChange}></input>
                <input type={"tel"} placeholder="Phone Number" className="form--input" name="phno" value={userDetails.phno} onChange={handleChange}></input>
                <select name="userType" value={userDetails.userType} className="form--input" onChange={handleChange}>
                    <option value="none" hidden>User Type</option>
                    <option value="end-user">General User</option>
                    <option value="financial-advisor">Financial Advisor</option>
                    <option value="student">Student</option>
                </select>
                <input type={"password"} placeholder="Password" className="form--input" name="password" value={userDetails.password} onChange={handleChange}></input>
                <button className="form--submit" onClick={saveFormData}>Join Now</button>
            </form>
        </div>
    )
}