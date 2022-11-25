import React, { useEffect, useState } from 'react';

function AddSavingModal() {

    const [savingData, setSavingData] = useState(
        {
            "title": "",
            "goal": ""
        }
    )

    function changeHandler(event) {
        const {name, value} = event.target;

        setSavingData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    async function submitSavingData() {
        if(savingData.title === "" || savingData.goal === "") {
            alert("Please fill all the fields")
        }
        else {
            await fetch("https://finzeoy.000webhostapp.com/SaveSavingData.php?userId="+sessionStorage.getItem("userId")+"&title="+savingData.title+"&goal="+savingData.goal+"")
            .then(res => res.json())
            .then(data => 
                {
                    if(data.status === "success") {
                        alert("Saving saved successfully")
                        window.location.reload();
                    }
                    else {
                        alert("Saving save failed")
                    }
                })
        }
    }

    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Add Saving</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p className="title" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Title</p>
                                <input type={"text"} name="title" onChange={changeHandler} id="titleInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                                
                                <p className="goal" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Goal</p>
                                <input type={"text"} name="goal" onChange={changeHandler} id="goalInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={submitSavingData}>Add Saving</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSavingModal