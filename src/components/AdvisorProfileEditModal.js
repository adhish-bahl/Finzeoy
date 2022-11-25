import { React, useState, useEffect } from "react";
import "../styles/TransactionModalStyles.css";

export default function AdvisorProfileEditModal({ nameP, ageP, professionP, descP, phnoP, twitterP, emailP, facebookP, linkedinP, websiteP }) {

    const [errorText, setErrorText] = useState()

    const [advisorDetails, setAdvisorDetails] = useState(
        {
            "name": "nameP",
            "age": "ageP",
            "profession": "professionP",
            "desc": "descP",
            "phno": "phnoP",
            "twitter": "twitterP",
            "email": "emailP",
            "facebook": "facebookP",
            "linkedin": "linkedinP",
            "website": "websiteP",
        }
    );

    async function saveAdvisorData() {
        // console.log(advisorDetails)
        await fetch("https://finzeoy.000webhostapp.com/UpdateProfile.php?userid=" + sessionStorage.getItem("userId") + "&age=" + advisorDetails.age + "&profession=" + advisorDetails.profession + "&desc=" + advisorDetails.desc + "&linkedin=" + advisorDetails.linkedin + "&twitter=" + advisorDetails.twitter + "&facebook=" + advisorDetails.facebook + "&website=" + advisorDetails.website + "")
            .then(res => res.json())
            .then(data => data.status === "success" ? setErrorText("Profile edited successfully") : setErrorText("Profile editing failed"))

        window.location.reload();
    }

    function advisorChangeHandler(event) {
        setErrorText("")
        const { name, value } = event.target;
        setAdvisorDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    useEffect(() => {
        setAdvisorDetails(prevState => {
            return {
                ...advisorDetails,
                "name": nameP,
                "age": ageP,
                "profession": professionP,
                "desc": descP,
                "phno": phnoP,
                "twitter": twitterP,
                "email": emailP,
                "facebook": facebookP,
                "linkedin": linkedinP,
                "website": websiteP,
            }
        }
        )

    }, [nameP]);

    return (
        <div id="myModal" className="modal" style={{ overflowY: "hidden" }}>
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2>Edit Personal Infomation</h2>
                </div>
                <div className="modal--mainContent">
                    <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", overflowY: "hidden" }}>
                        <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditName" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Name</p>
                            <input type={"text"} disabled name="name" onChange={advisorChangeHandler} id="advisorEditNameInput" value={advisorDetails.name} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditAge" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Age</p>
                            <input type={"text"} name="age" onChange={advisorChangeHandler} id="advisorEditAgeInput" value={advisorDetails.age} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditProfession" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Profession</p>
                            <input type={"text"} name="profession" onChange={advisorChangeHandler} id="advisorEditProfessionInput" value={advisorDetails.profession} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditDesc" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }} >Description</p>
                            <textarea name="desc" id="advisorEditDescInput" onChange={advisorChangeHandler} value={advisorDetails.desc} style={{ height: "10rem", width: "80%", padding: "5px" }} />
                        </div>
                        <div className="rightOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditPhNo" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Phone Number</p>
                            <input type={"text"} disabled onChange={advisorChangeHandler} name="phno" id="advisorEditPhNoInput" value={advisorDetails.phno} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditEmail" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>E-mail</p>
                            <input type="email" disabled onChange={advisorChangeHandler} name="email" id="advisorEditEmailInput" value={advisorDetails.email} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditTwitter" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Twitter</p>
                            <input type={"text"} onChange={advisorChangeHandler} name="twitter" id="advisorEditTwitterInput" value={advisorDetails.twitter} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditFacebook" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Facebook</p>
                            <input type={"text"} onChange={advisorChangeHandler} name="facebook" id="advisorEditFacebookInput" value={advisorDetails.facebook} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditLinkedIn" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>LinkedIn</p>
                            <input type={"text"} onChange={advisorChangeHandler} name="linkedin" id="advisorEditLinkedInInput" value={advisorDetails.linkedin} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditWebsite" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Website</p>
                            <input type={"text"} onChange={advisorChangeHandler} name="website" id="advisorEditWebsiteInput" value={advisorDetails.website} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                        </div>
                    </form>
                    <label className="loginErrorDislayLabel"> {errorText} </label>
                    <button className="saveDetailsButton" type="submit" style={{ marginTop: "30px", width: "100px", padding: "5px", fontWeight: "bold" }} onClick={saveAdvisorData}>Save</button>
                </div>
            </div>
        </div>
    )
}