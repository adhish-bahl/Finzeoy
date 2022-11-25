import React, { useState, useRef } from "react";
import {useHistory} from 'react-router-dom'
import CryptoJS from "crypto-js";
import '../styles/SignUpStyles.css'

export default function SignUp() {

    const [signupError, setSignupError] = useState("");
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const ref = useRef(null);

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
        console.log(passwordShown);
    };

    const history = useHistory();
    var userId;

    const ischecked = () => {
        setSignupError("");
        if(ref.current.checked) {
            setAcceptPolicy(true)
        } else {
            setAcceptPolicy(false)
        }
    }

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
            "userType": "end-user",
            "hasError": false
        },
        {
            "password": "null",
            "hasError": false
        }
    ]
    );

    function handleChange(event) {
        setSignupError("");

        const {name, value, style} = event.target;

        let isError = validateForm(name, value);
        isError ? style.outline = "2px solid red" : style.outline = "2px solid black";

        setUserDetails(prevFormData => {
            let outputArr = prevFormData.map(item => {
                if(item[name] || item[name] === "") {
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

        return false;
    }

    async function saveFormData() {
        if(acceptPolicy) {
            if(userDetails[0].hasError || userDetails[1].hasError || userDetails[2].hasError || userDetails[3].hasError || userDetails[4].hasError) {
                setSignupError("Invalid inputs. Please check your inputs and retry.");
            }
            else {
                userDetails[4].password = CryptoJS.AES.encrypt(userDetails[4].password, "finzeoy").toString();
                
                await saveData();

                if(userDetails[3].userType === "financial-advisor") {
                    await fetch("https://finzeoy.000webhostapp.com/SaveAdvisorInfo.php?userid="+userId+"")
                    .then(res => res.json())
                    .then(data => {})
                }

                switch(userDetails[3].userType) {
                    case "end-user":
                        history.push('/general');
                        window.location.reload();
                        break;

                    case "financial-advisor":
                        history.push('/advisors');
                        window.location.reload();
                        break;

                    case "student":
                        history.push('/learning');
                        window.location.reload();
                        break;

                    default:
                        break;
                }
            }
        }
        else {
            setSignupError("Please check the accept policy box")
        }
    }

    async function saveData() {
        await fetch("https://finzeoy.000webhostapp.com/SaveUserData.php?name="+userDetails[0].name+"&email="+userDetails[1].email+"&phno="+userDetails[2].phno+"&type="+userDetails[3].userType+"&pwd="+userDetails[4].password+"")
        .then(res => res.json())
        .then(data => {
            if(data.status === "Success") {
                userId = data.userId;
                sessionStorage.setItem("userId", userId);
                setSignupError("Signed up successfully")
            }
            else {
                setSignupError("Sign up failed")
            }
        });
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
                    <div className="form--input passwordDiv">
                        <input className="form--input passwordInput" type={passwordShown ? "text" : "password"} placeholder="Password" name="password" onChange={handleChange} ></input>
                        <button className="passwordButton" onClick={togglePassword}>
                            <img className="showImageIcon" onClick={togglePassword} src={passwordShown ? showPassword : hidePassword} alt="showPassword" />
                        </button>
                    </div>
                    
                </form>
                <div className="PoliciesSection">
                    <input type="checkbox" name="form--terms" id="policies" onChange={ischecked} ref = {ref} />
                    <p className="form--terms">By clicking Agree & Join, you agree to the FINZEOY<br></br> User Agreement, Privacy Policy, and Cookie Policy.</p>
                </div>
                <div className="errorAndButton">
                    <label className="loginErrorDislayLabel"> {signupError} </label>
                    <button className="form--submit" onClick={saveFormData}>Join Now</button>
                </div>
            </div>
        </div>
    )
}