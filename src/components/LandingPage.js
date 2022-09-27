import React from 'react'
import LPBG from "../Images/LandingPageBG.png"
import icon from "../Images/Ambassador-bro 1.svg"
import "../styles/LandingPage.css"
import wallet from "../Images/Wallet.svg"
import coinStack from "../Images/CoinStack.svg"

function LandingPage() {
  return (
    <div className='LandingPageContainer' style={{overflow: "hidden"}}>
        <div className="LPleft">
          <img className='backgrounfLeft' src={LPBG} alt="Background" />
        </div>

        <img className='manIcon'  src={icon} alt="man" />

        <div className="LPright">
          <div className="LPrightTop">
            <img src={wallet} className="LPWallet" alt="Wallet" />
            Finzeoy is a personal finance management system. Finance, of financing, is the process of raising funds or capital for any kind of expenditure. It is the process of channeling various funds in the form of credit, loans, or invested capital to those economic entities that most need them or can put them to the most productive use.
            <img className='LPCoinStack' src={coinStack} alt="Coins" />
          </div>
          <div className="LPrightLower">
          © FINZEOY 2022
          </div>
        </div>
    </div>
  )
}

export default LandingPage