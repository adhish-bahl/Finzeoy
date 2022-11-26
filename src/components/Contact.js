import React from "react";
import teamImg from "../Images/bg-illustration1.png"
import "../styles/ContactUs.css";
import linkedin from "../Images/linkedinIcon.png"
import github from "../Images/githubIcon.png"
import groupImg from "../Images/groupImgMain.jpg"

export default function Contact() {
    return (
        <div className='teamContainer'>
            <div className="upper">
                <img className='teamPicture' src={groupImg} alt="" />
            </div>
            <div className="lower">
                <h1>About Us</h1>
                <div className="information">
                    <div className="left">
                        <div className="name">Adhish Bahl</div>
                        <div className="intro">Hey! I am a self taught web developer and I am more interested in Front-end development. My experties are HTML V5, CSS V3, JavaScript along with ReactJS for front end development. Other then web development, Video Editing and Photography also interests me. Also I am coffee addict :)
                            <div className="socialMediaCreater">
                                <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank" >
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
                            Hi, I am Kavish Kumar S. I am currently pursuing BCA from Chist (Deemed to be University). I am learning full-stack development using MERN stack. I have a keen interest in developing web based applications.
                            <div className="socialMediaCreater">
                                <a href="https://www.linkedin.com/in/kavish-bamboli-8944a021b/" target="_blank">
                                    <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                                <a href="https://github.com/KavishBamboli" target="_blank">
                                    <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">Priyanshi S. Mundhra</div>
                        <div className="intro">Hi, I am Priyanshi Mundhra. I am currently interested in anything and evrything related to data. I like only 3 things: Data, Data and more Data.</div>
                        <div className="socialMediaCreater">
                            <a href="https://www.linkedin.com/in/priyanshi-mundhra-592590200/" target="_blank">
                                <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                            </a>
                            {/* <a href="https://github.com/adhish-bahl" target="_blank">
                                <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                            </a> */}
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">Riddhisha D. Sevalkar</div>
                        <div className="intro">I am Ria, a BCA student at Christ University. A keen learner with an inquisitive mind who likes to learn and explore new skills and a team player. One of my strengths is my ability to manage deadlines and work on time. My interests lie in reading, sketching, writing and photography</div>
                        <div className="socialMediaCreater">
                            {/* <a href="https://www.linkedin.com/in/adhish-bahl-4113591b7/" target="_blank">
                                <img src={linkedin} alt="linkedIn" style={{ width: "30px" }} />
                            </a> */}
                            {/* <a href="https://github.com/adhish-bahl" target="_blank">
                                <img src={github} alt="linkedIn" style={{ width: "30px" }} />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}