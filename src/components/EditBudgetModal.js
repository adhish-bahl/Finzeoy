import React, { useEffect, useState } from 'react';

function EditBudgetModal(props) {

    const [errorText, setErrorText] = useState()

    const [budgetData, setBudgetData] = useState(
        {
            "budgetId": props.data.length === 0 ? "" : props.data[0].budgetId,
            "amount": "",
        }
    )

    function changeHandler(event) {
        setErrorText("")
        const { name, value } = event.target;

        setBudgetData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    async function updateBudgetData() {
        if (budgetData.budgetId === "" || budgetData.amount === "") {
            setErrorText("Please fill all the fields")
        }
        else {
            await fetch("https://finzeoy.000webhostapp.com/UpdateBudgetData.php?userId=" + sessionStorage.getItem("userId") + "&budgetid=" + budgetData.budgetId + "&amount=" + budgetData.amount + "")
                .then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        setErrorText("Budget updated successfully")
                        window.location.reload();
                    }
                    else {
                        setErrorText("Budget update failed")
                    }
                })
        }
    }


    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Edit Budget</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p className="list" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Budget categories</p>
                                <select name="budgetId" id="listInput" onChange={changeHandler} style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                    {props.data.map(item => {
                                        return <option key={item.budgetId} value={item.budgetId}>{item.category}</option>
                                    })}
                                </select>

                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                                <input type={"number"} name="amount" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={updateBudgetData}>Edit Budget</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBudgetModal