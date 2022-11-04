import {React, useState} from "react";
import {useHistory} from 'react-router-dom'
import '../styles/LoginSignUpHeaderStyles.css'
// import '../styles/PageHeaderStyles.css'
import logo from "../Images/Logo.png"


export default function PageHeader(props) {

    // const headerItems = props.headerItems.map(item => {
    //     return <button className={`header--link ${props.displayPage === item ? "page--active" : ""}`} onClick={event => props.handleClick(event)}>{item}</button>
    // })

    const [title1State, setTitle1State] = useState(props.titleState);
    const history = useHistory();

    const handleClickTitle1 = () => {
        setTitle1State(true);
        history.push(props.title1Route)
        window.location.reload()
    }
    
    const handleClickTitle2 = () => {
        setTitle1State(false);
        history.push(props.title2Route)
        window.location.reload()
    }
    
    const openLandingPage = () => {
        history.push('/')
        window.location.reload()
    }

    return (
        <div className="header">
            <div className="header--title" onClick={openLandingPage}>
                <img src={logo} className="header--image" />
                <h1 className="header--name">FINZEOY</h1>
            </div>
            <div className="header--buttons">
                <button className={`header--link ${title1State == "true" ? "active" : ""}`} onClick={handleClickTitle1}>{props.title1}</button>
                <button className={`header--link ${title1State == "true" ? "" : "active"}`} onClick={handleClickTitle2}>{props.title2}</button>
            </div>
            <div className="header--buttons">
                <h3 className="profile--name">{props.username}</h3>
                {/* <img className="profile--logo" src="./Images/profile_logo.png" /> */}
            </div>
        </div>
        // <div className="header">
        //     <div className="header--title">
        //         <img src={logo} className="header--image" />
        //         <h1 className="header--name">FINZEOY</h1>
        //     </div>

        //     <div className="header--right">
        //         <div className="header--buttons">
        //             {headerItems}
        //             <h3 className="profile--name">{props.username}</h3>
        //             <img className="profile--logo" src="./Images/profile_logo.png" />
        //         </div>
        //     </div>
        // </div>
    )
}