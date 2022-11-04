import React, { useEffect, useState } from 'react'
import "../styles/AdvisorQuestionComp.css"

function AdvisorQuestionComp({question, author}) {

    const [askedBy, setAskedBy] = useState("");

    useEffect(() => {
      fetch("https://localhost/Finzeoy/ServerFiles/GetUserData.php?userId="+author+"")
      .then(res => res.json())
      .then(data => setAskedBy(data))
    })

    return (
      <div className='AdvisorQuestionCompContainer'>
          <div className="AQquestion">
              {question}
          </div>
          <div className="AQauthor">
              Asked by {askedBy.name}
          </div>
          <div className="AQbtnContainer">
              <button type="submit" className='AQsubmitBtn'>Answer</button>
          </div>
      </div>
    )
}

export default AdvisorQuestionComp