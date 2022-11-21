import {React, useState} from "react";
import "../styles/TransactionModalStyles.css";

export default function ArticleModal({nameP, ageP, professionP, descP, phnoP, twitterP, emailP, facebookP, linkedinP, websiteP}) {


    const [name, setName] = useState(nameP);
    const [age, setAge] = useState(ageP);
    const [profession, setProfession] = useState(professionP);
    const [desc, setDesc] = useState(descP);
    const [phno, setPhno] = useState(phnoP);
    const [twitter, setTwitter] = useState(twitterP);
    const [email, setEmail] = useState(emailP);
    const [facebook, setFacebook] = useState(facebookP);
    const [linkedin, setLinkedin] = useState(linkedinP);
    const [website, setWebsite] = useState(websiteP);



    return (
        <div id="myModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close">&times;</span>
                    <h2>Edit Personal Infomation</h2>
                </div>
                <div className="modal--mainContent">
                    <form action="" style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                        <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditName">Name</p>
                            <input type="text" name="advisorEditName" id="advisorEditNameInput" value={name} />
                            <p className="advisorEditAge">Age</p>
                            <input type="text" name="advisorEditAge" id="advisorEditAgeInput" value={age} />
                            <p className="advisorEditProfession">Profession</p>
                            <input type="text" name="advisorEditProfession" id="advisorEditProfessionInput" value={profession} />
                            <p className="advisorEditDesc">Description</p>
                            <textarea name="advisorEditDesc" id="advisorEditDescInput" value={desc} />
                        </div>
                        <div className="rightOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p className="advisorEditPhNo">Phone Number</p>
                            <input type="text" name="advisorEditPhNo" id="advisorEditPhNoInput" value={phno} />
                            <p className="advisorEditTwitter">Twitter</p>
                            <input type="text" name="advisorEditTwitter" id="advisorEditTwitterInput" value={twitter} />
                            <p className="advisorEditEmail">E-mail</p>
                            <input type="email" name="advisorEditEmail" id="advisorEditEmailInput" value={email} />
                            <p className="advisorEditFacebook">Facebook</p>
                            <input type="text" name="advisorEditFacebook" id="advisorEditFacebookInput" value={facebook} />
                            <p className="advisorEditLinkedIn">LinkedIn</p>
                            <input type="text" name="advisorEditLinkedIn" id="advisorEditLinkedInInput" value={linkedin} />
                            <p className="advisorEditWebsite">Website</p>
                            <input type="text" name="advisorEditWebsite" id="advisorEditWebsiteInput"  value={website} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}