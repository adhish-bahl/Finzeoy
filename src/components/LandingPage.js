import React from 'react'
import LPBG from "../Images/LandingPageBG.png"
import icon from "../Images/Ambassador-bro 1.svg"
import "../styles/LandingPage.css"

function LandingPage() {
  return (
    <div className='LandingPageContainer'>
        <div className="LPleft">
          <img src={LPBG} alt="Background" />
        </div>

        <img src={icon} alt="man" />

        <div className="LPright">
        </div>
    </div>
  )
}

export default LandingPage