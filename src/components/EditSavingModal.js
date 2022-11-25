import React, { useState } from 'react';

function EditSavingModal(props) {

    const [errorText, setErrorText] = useState()

    const [savingData, setSavingData] = useState(
        {
            "savingFundId": props.data.length === 0 ? "" : props.data[0].savingId,
            "amountSaved": "",
        }
    )

    function changeHandler(event) {
        setErrorText("")
        const { name, value } = event.target;

        setSavingData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    async function updateSaving() {
        if (savingData.savingFundId === "" || savingData.amountSaved === "") {
            setErrorText("Please fill all the fields")
        }
        else {
            var newSavingAmt = 0;

            for (var i = 0; i < props.data.length; i++) {
                if (props.data[i].savingId == savingData.savingFundId) {
                    newSavingAmt = parseInt(props.data[i].amtSaved) + parseInt(savingData.amountSaved);
                    await fetch("https://finzeoy.000webhostapp.com/EditSavingData.php?userId=" + sessionStorage.getItem("userId") + "&title=" + props.data[i].title + "&amount=" + newSavingAmt + "")
                        .then(res => res.json())
                        .then(data => {
                            if (data.status === "success") {
                                setErrorText("Saving updated successfully")
                                window.location.reload();
                            }
                            else {
                                setErrorText("Saving update failed")
                            }
                        })
                }
            }
        }
    }


    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Edit Saving</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <p className="list" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Savings</p>
                                <select name="savingFundId" id="listInput" onChange={changeHandler} style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                    {props.data.map(item => {
                                        return <option key={item.savingId} value={item.savingId}>{item.title}</option>
                                    })}
                                </select>

                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Add amount Saved</p>
                                <input type={"number"} name="amountSaved" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <label className="loginErrorDislayLabel"> {errorText} </label>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={updateSaving}>Update saving</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSavingModal