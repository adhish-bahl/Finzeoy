import {React, useState, useEffect} from "react";
import "../styles/TransactionModalStyles.css";

export default function AdvisorProfileEditModal({nameP, ageP, professionP, descP, phnoP, twitterP, emailP, facebookP, linkedinP, websiteP}) {

    // const [advisorDetails, setAdvisorDetails] = useState(
    //     {
    //         "name": nameP,
    //         "age": ageP,
    //         "profession": professionP,
    //         "desc": descP,
    //         "phno": phnoP,
    //         "twitter": twitterP,
    //         "email": emailP,
    //         "facebook": facebookP,
    //         "linkedin": linkedinP,
    //         "website": websiteP,
    //     }
    // );

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [profession, setProfession] = useState();
    const [desc, setDesc] = useState();
    const [phno, setPhno] = useState();
    const [twitter, setTwitter] = useState();
    const [email, setEmail] = useState();
    const [facebook, setFacebook] = useState();
    const [linkedin, setLinkedin] = useState();
    const [website, setWebsite] = useState();

    function saveAdvisorData() {
    }

    useEffect(() => {
        setName(nameP);
        setAge(ageP);
        setProfession(professionP);
        setDesc(descP);
        setPhno(phnoP);
        setTwitter(twitterP);
        setEmail(emailP);
        setFacebook(facebookP);
        setLinkedin(linkedinP);
        setWebsite(websiteP);
    }, []);

    return (
        <div id="myModal" className="modal" style={{ overflowY: "hidden" }}>
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2>Edit Personal Infomation</h2>
                </div>
                <div className="modal--mainContent">
                    <form action="" style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", overflowY: "hidden"}}>
                        <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditName" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Name</p>
                            <input type={"text"} name="name" id="advisorEditNameInput" value={name} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditAge" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Age</p>
                            <input type={"text"} name="age" id="advisorEditAgeInput" value={age} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditProfession" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Profession</p>
                            <input type={"text"} name="profession" id="advisorEditProfessionInput" value={profession} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditDesc" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }} >Description</p>
                            <textarea name="desc" id="advisorEditDescInput" value={desc} style={{ height: "10rem", width: "80%", padding: "5px" }} />
                        </div>
                        <div className="rightOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditPhNo" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Phone Number</p>
                            <input type={"text"} name="phno" id="advisorEditPhNoInput" value={phno} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditTwitter" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Twitter</p>
                            <input type={"text"} name="twitter" id="advisorEditTwitterInput" value={twitter} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditEmail" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>E-mail</p>
                            <input type="email" name="email" id="advisorEditEmailInput" value={email} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditFacebook" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Facebook</p>
                            <input type={"text"} name="facebook" id="advisorEditFacebookInput" value={facebook} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditLinkedIn" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>LinkedIn</p>
                            <input type={"text"} name="linkedin" id="advisorEditLinkedInInput" value={linkedin} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            <p className="advisorEditWebsite" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom:"0px" }}>Website</p>
                            <input type={"text"} name="website" id="advisorEditWebsiteInput" value={website} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                        </div>
                    </form>
                        <button className="saveDetailsButton" type="submit" style={{marginTop: "30px", width: "100px", padding: "5px", fontWeight: "bold" }} onClick={saveAdvisorData}>Save</button>
                </div>
            </div>
        </div>
    )
}