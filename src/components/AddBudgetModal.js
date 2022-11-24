import React, { useEffect, useState } from 'react';

function AddBudgetModal() {
    
    const [budgetData, setBudgetData] = useState(
        {
            "category": "",
            "amount": ""
        }
    )
    
    function changeHandler(event) {
        const {name, value} = event.target;

        setBudgetData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    async function submitBudgetData() {
        await fetch("https://finzeoy.000webhostapp.com/SaveBudgetData.php?userId="+sessionStorage.getItem("userId")+"&category="+budgetData.category+"&amount="+budgetData.amount+"")
        .then(res => res.json())
        .then(data => data.status === "success" ? alert("Budget category saved successfully") : alert("Budget category save failed"))

        window.location.reload();
    }


    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Add Budget</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p className="category" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Category</p>
                                <input type={"text"} name="category" onChange={changeHandler} id="titleInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                                <input type={"text"} name="amount" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={submitBudgetData}>Add Budget</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBudgetModal