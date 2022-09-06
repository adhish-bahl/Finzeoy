import React from "react";
import '../styles/SignUpStyles.css'

export default function SignUp() {
    return (
        <div className="signUp--container">
            <div>
                <h1 className="signUp--head">SIGN UP</h1>
                <h5 className="signUp--head">STAY UPDATED ON THE FINANCIAL WORLD</h5>
            </div>
            <form className="signUp--form">
                <input type={"text"} placeholder="Name" className="form--input"></input>
                <input type={"email"} placeholder="Email ID" className="form--input"></input>
                <input type={"tel"} placeholder="Phone Number" className="form--input"></input>
                <select className="form--input">
                    <option value="none" selected disabled hidden>User Type</option>
                    <option>End User</option>
                    <option>Financial Advisor</option>
                    <option>Student</option>
                </select>
                <input type={"password"} placeholder="Password" className="form--input"></input>
                <button className="form--submit">Join Now</button>
            </form>
        </div>
    )
}