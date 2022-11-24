import React, { useEffect, useState } from "react"
import {useHistory} from 'react-router-dom'
import '../styles/SignUpStyles.css'

export default function Login() {

    const history = useHistory();

    const[errorLabel, setErrorlabel] = useState()

    const [loginDetails, setLoginDetails] = useState([
        {
            "email": "null",
            "hasError": false
        },
        {
            "password": "null",
            "hasError": false
        },
        {
            "userType": "end-user",
            "hasError": false
        }
    ]
    );

    const [usersData, setUsersData] = useState([]);

    function handleChange(event) {
        setErrorlabel("")
        const {name, value, style} = event.target;

        let isError = validateForm(name, value);
        isError ? style.outline = "2px solid red" : style.outline = "2px solid black";

        setLoginDetails(prevFormData => {
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
        if(name === "email")
            return value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ? false : true;

        if(name === "password")
            return value.match(/[^ ]{6}/) ? false : true;

        return false;
    }

    function loginUser() {
        if(loginDetails[0].hasError || loginDetails[1].hasError || loginDetails[2].hasError) {
            setErrorlabel("Invalid inputs. Please check your inputs and retry.");
        }
        else {
            for(let i = 0; i<usersData.length; i++) {
                if(loginDetails[0].email === usersData[i].email && loginDetails[1].password === usersData[i].password && loginDetails[2].userType === usersData[i].userType) {
                    sessionStorage.setItem("userId", usersData[i].userId)
                    switch(loginDetails[2].userType) {
                        case "end-user":
                            setErrorlabel("Login successful!");
                            history.push('/general');
                            window.location.reload();
                            break;
                            
                        case "financial-advisor":
                            setErrorlabel("Login successful!");
                            history.push('/advisors');
                            window.location.reload();
                            break;
                            
                        case "student":
                            setErrorlabel("Login successful!");
                            history.push('/learning');
                            window.location.reload();
                            break;

                        default:
                            break;
                    }
                    return;
                }
            }
            setErrorlabel("Invalid email or password. Please try again.");
        }
    }

    useEffect(() => {
        fetch("https://finzeoy.000webhostapp.com/GetUsersData.php")
        .then(res => res.json())
        .then(data => setUsersData(data))
    }, [])

    return (
        <div className="signUp--container login--container">
            <div>
                <h1 className="signUp--head">LOG IN</h1>
                <h5 className="signUp--head">STAY UPDATED ON THE FINANCIAL WORLD</h5>
            </div>
            <form className="signUp--form">
                <input type={"email"} placeholder="Email ID" className="form--input" name="email" onChange={handleChange}></input>
                <input type={"password"} placeholder="Password" className="form--input" name="password" onChange={handleChange}></input>
                <fieldset className="form--radioInput">
                    <legend className="form--radioInput--legend">User Type</legend>
                    <input type={"radio"} name="userType" id="endUser" value="end-user" checked={loginDetails[2].userType === "end-user"} onChange={handleChange}></input>
                    <label htmlFor="endUser">General</label>
                    <input type={"radio"} name="userType" id="advisor" value="financial-advisor" checked={loginDetails[2].userType === "financial-advisor"} onChange={handleChange}></input>
                    <label htmlFor="advisor">Advisor</label>
                    <input type={"radio"} name="userType" id="student" value="student" checked={loginDetails[2].userType === "student"} onChange={handleChange}></input>
                    <label htmlFor="student">Student</label>
                </fieldset>
                <label className="loginErrorDislayLabel"> {errorLabel} </label>
                <a href="#" className="form--forgotPass">Forgot your Password?</a>
            </form>
            <button className="form--submit" onClick={loginUser}>Login</button>
        </div>
    )
    
}