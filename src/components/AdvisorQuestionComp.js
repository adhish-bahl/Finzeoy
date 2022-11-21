import React, { useEffect, useState } from 'react'
import "../styles/AdvisorQuestionComp.css"
import AdvisorAnsweringModal from './AdvisorAnsweringModal'

function AdvisorQuestionComp({question, author}) {

    const [askedBy, setAskedBy] = useState("");

    function showModal(event) {
        var modal = event.target.parentElement.children[1];
        var span = modal.children[0].children[0].children[0];

        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    useEffect(() => {
      fetch("https://finzeoy.000webhostapp.com/GetUserData.php?userId="+author+"")
      .then(res => res.json())
      .then(data => setAskedBy(data))
    }, [])

    return (
      <div className='AdvisorQuestionCompContainer'>
          <div className="AQquestion">
              {question}
          </div>
          <div className="AQauthor">
              Asked by {askedBy.name}
          </div>
          <div className="AQbtnContainer">
              <button type="submit" className='AQsubmitBtn' onClick={showModal}>Answer</button>
              <AdvisorAnsweringModal question = {question} askedBy = {askedBy.name} />
          </div>
      </div>
    )
}

export default AdvisorQuestionComp