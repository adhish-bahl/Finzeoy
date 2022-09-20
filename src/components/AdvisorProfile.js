import React from 'react'
import "../styles/AdvisorProfile.css"


function AdvisorProfile() {
  return (
    <div className='APcontainer'>
        <div className="APleft">

            <div className="APLone">
                <div className="APLOleft">
                    <img className='APLOLprofileimg' src="./Images/default_logo.png" alt="profileImg" />
                </div>

                <div className="APLOright">
                    <div className="APadname">Name</div>
                    <div className="APadage">Age</div>
                    <div className="APadprofession">Profession</div>
                </div>
            </div>

            <div className="APLtwo">
                <h1 className="APheading">Profile</h1>
            </div>

            <div className="APLthree">
                <h1 className="APheading">Contact</h1>
                
                <div className="APLTtags">
                    <div className="tags">Phone No.</div>
                    <div className="tags">Twitter</div>
                    <div className="tags">Email Id</div>
                    <div className="tags">Facebook</div>
                    <div className="tags">LinkedIn</div>
                    <div className="tags">Website</div>
                </div>
            </div>

        </div>

        <div className="APright">

        </div>
    </div>
  )
}

export default AdvisorProfile