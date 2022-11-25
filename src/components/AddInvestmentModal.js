import React, { useEffect, useState } from 'react';

function AddSavingModal() {

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    const [investmentData, setInvestmentData] = useState(
        {
            "title": "",
            "category": "Stocks",
            "amount": "",
            "date": date
        }
    )

    function changeHandler(event) {
        const {name, value} = event.target;

        setInvestmentData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    async function submitInvestmentData() {
        if(investmentData.title === "" || investmentData.category === "" || investmentData.amount === "" || investmentData.date === "") {
            alert("Please fill all the fields")
        }
        else {
            await fetch("https://finzeoy.000webhostapp.com/SaveInvestmentData.php?userId="+sessionStorage.getItem("userId")+"&title="+investmentData.title+"&category="+investmentData.category+"&amount="+investmentData.amount+"&date="+investmentData.date+"")
            .then(res => res.json())
            .then(data => 
                {
                    if(data.status === "success") {
                        alert("Investment saved successfully")
                        window.location.reload();
                    }
                    else {
                        alert("Investment save failed")
                    }
                })
        }
    }

    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Add Investment</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p className="title" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Title</p>
                                <input type={"text"} name="title" onChange={changeHandler} id="titleInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />

                                <p className="category" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Category</p>
                                <select name="category" id="categoryInput" onChange={changeHandler} style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                    <option value="salary">Stocks</option>
                                    <option value="commision">Mutual Fund</option>
                                    <option value="interest">Gold</option>
                                    <option value="rent">Currenct</option>
                                    <option value="miscellaneous">Real Estate</option>
                                </select>

                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                                <input type={"number"} name="amount" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                                
                                <p className="date" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }} >Date</p>
                                <input type={"date"} name="date" onChange={changeHandler} id="dateInput" defaultValue={date}  style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={submitInvestmentData}>Add investment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSavingModal