import React, { useState } from "react";
import '../styles/SignUpStyles.css'

export default function SignUp() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phno: "",
        userType: "none",
        password: ""
    });

    function handleChange(event) {
        // validation code
        const {name, value} = event.target;
        setUserDetails(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    function saveFormData() {
        //Code to call backend and save form data
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
                    <option value="end-user">End User</option>
                    <option value="financial-advisor">Financial Advisor</option>
                    <option value="student">Student</option>
                </select>
                <input type={"password"} placeholder="Password" className="form--input" name="password" value={userDetails.password} onChange={handleChange}></input>
                <button className="form--submit" onClick={saveFormData}>Join Now</button>
            </form>
        </div>
    )
}