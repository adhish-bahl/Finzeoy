import React from "react";
import teamImg from "../Images/bg-illustration1.png"
import "../styles/ContactUs.css";
import linkedin from "../Images/linkedinIcon.png"
import github from "../Images/githubIcon.png"

export default function Contact() {
    return (
        <div className='teamContainer'>
            <div className="upper">
                <img className='teamPicture' src={teamImg} alt="" />
            </div>
            <div className="lower">
                <h1>About Us</h1>
                <div className="information">
                    <div className="left">
                        <div className="name">Adhish Bahl</div>
                        <div className="intro">Heya! I am a self taught web developer and I am more interested in Front-end development. My experties are HTML V5, CSS V3, JavaScript along with ReactJS for front end development. Other then web development, Video Editing and Photography also interests me. Also I am coffee addict :)
                            <div className="socialMediaCreater">
                                <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank">
                                    <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                                <a href="https://github.com/adhish-bahl" target="_blank">
                                    <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="name">Kavish Kumar S.</div>
                        <div className="intro">
                            Hi, I am Gayathri. I’d describe myself as a person largely driven by curiosity. Being a student at Christ (Deemed to be University) has provided me the opportunity to come up with this website and provided me an outlet where I along with my team have given direction to our curiosity and shaped our ideas to life. I’ve always envisioned on creating a platform that brings together like minded people and T-Une is just that!
                            <div className="socialMediaCreater">
                                <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank">
                                    <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                                <a href="https://github.com/adhish-bahl" target="_blank">
                                    <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">Priyanshi S. Mundhra</div>
                        <div className="intro">I am a student pursuing BCA in Christ University. My interest lies in back-end development and AI. my expertise are in MySQL, HTML5 and C. Among my other interest is Music and art.</div>
                        <div className="socialMediaCreater">
                            <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank">
                                <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                            </a>
                            <a href="https://github.com/adhish-bahl" target="_blank">
                                <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">Riddhish Savalkar</div>
                        <div className="intro">I am a student pursuing BCA in Christ University. My interest lies in back-end development and AI. my expertise are in MySQL, HTML5 and C. Among my other interest is Music and art.</div>
                        <div className="socialMediaCreater">
                            <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank">
                                <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                            </a>
                            <a href="https://github.com/adhish-bahl" target="_blank">
                                <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}