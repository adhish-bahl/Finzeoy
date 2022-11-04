import React, { useState } from "react";
import '../styles/SignUpStyles.css'

export default function SignUp() {

    const [userDetails, setUserDetails] = useState([
        {
            "name": "null",
            "hasError": false
        },
        {
            "email": "null",
            "hasError": false
        },
        {
            "phno": "null",
            "hasError": false
        },
        {
            "userType": "none",
            "hasError": false
        },
        {
            "password": "null",
            "hasError": false
        }
    ]
    );

    function handleChange(event) {
        const {name, value, style} = event.target;

        let isError = validateForm(name, value);
        isError ? style.outline = "2px solid red" : style.outline = "2px solid black";

        setUserDetails(prevFormData => {
            let outputArr = prevFormData.map(item => {
                if(item[name]) {
                    return {
                        ...item,
                        [name]: value,
                        "hasError": isError
                    }
                }
                else {
                    return {...item}
                }
            })
            return outputArr;
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
        if(userDetails[0].hasError || userDetails[1].hasError || userDetails[2].hasError || userDetails[3].hasError || userDetails[4].hasError) {
            alert("Invalid inputs. Please check your inputs and retry.");
        }
        else {
            fetch("https://localhost/Finzeoy/ServerFiles/SaveUserData.php?name="+userDetails[0].name+"&email="+userDetails[1].email+"&phno="+userDetails[2].phno+"&type="+userDetails[3].userType+"&pwd="+userDetails[4].password+"")
            .then(res => res.json())
            .then(data => data.status === "Success" ? alert("Signed up successfully") : alert("Sign up failed"));
        }
    }

    return (
        <div>
            <div className="signUp--container">
                <div>
                    <h1 className="signUp--head">SIGN UP</h1>
                    <h5 className="signUp--head">STAY UPDATED ON THE FINANCIAL WORLD</h5>
                </div>
                <form className="signUp--form">
                    <input type={"text"} placeholder="Name" className="form--input" name="name" onChange={handleChange}></input>
                    <input type={"email"} placeholder="Email ID" className="form--input" name="email" onChange={handleChange}></input>
                    <input type={"tel"} placeholder="Phone Number" className="form--input" name="phno" onChange={handleChange}></input>
                    <select name="userType" className="form--input" onChange={handleChange}>
                        <option value="none" hidden>User Type</option>
                        <option value="end-user">General User</option>
                        <option value="financial-advisor">Financial Advisor</option>
                        <option value="student">Student</option>
                    </select>
                    <input type={"password"} placeholder="Password" className="form--input" name="password" onChange={handleChange}></input>
                </form>
                <p className="form--terms">By clicking Agree & Join, you agree to the FINZEOY<br></br> User Agreement, Privacy Policy, and Cookie Policy.</p>
                <button className="form--submit" onClick={saveFormData}>Join Now</button>
            </div>
        </div>
    )
}