import React, { useEffect, useState } from 'react';

function AddExpenseModal(props) {

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    const [errorText, setErrorText] = useState()

    const [expenseData, setExpenseData] = useState(
        {
            "title": "",
            "category": props.data.length === 0 ? "" : props.data[0].category,
            "amount": "",
            "date": date
        }
    )

    function changeHandler(event) {
        setErrorText("")
        
        const { name, value } = event.target;

        setExpenseData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    async function submitExpenseData() {
        if (expenseData.title === "" || expenseData.category === "" || expenseData.amount === "" || expenseData.amount === "") {
            setErrorText("Please fill all the fields")
        }
        else {
            await fetch("https://finzeoy.000webhostapp.com/SaveExpenseData.php?userId=" + sessionStorage.getItem("userId") + "&title=" + expenseData.title + "&category=" + expenseData.category + "&amount=" + expenseData.amount + "&date=" + expenseData.date + "")
                .then(res => res.json())
                .then(data => {
                    if (data.status === "success") {
                        setErrorText("Expense saved successfully")
                        window.location.reload();
                    }
                    else {
                        setErrorText("Expense save failed")
                    }
                })
        }
    }

    return (
        <div id="postModal" className="modal">
            <div className="modal--content" style={{ width: "30vw" }}>
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Add Expense</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                            <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p className="title" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Title</p>
                                <input type={"text"} name="title" onChange={changeHandler} id="titleInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                                <p className="category" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Category</p>
                                <select name="category" id="categories" onChange={changeHandler} style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                    {props.data.map(item => {
                                        return <option key={item.budgetid} value={item.category}>{item.category}</option>
                                    })}
                                </select>

                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                                <input type={"number"} name="amount" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />

                                <p className="date" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }} >Date</p>

                                <input type={"date"} name="date" onChange={changeHandler} id="dateInput" defaultValue={date} style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                            </div>

                        </form>
                        <label className="loginErrorDislayLabel"> {errorText} </label>
                        <button style={{ marginTop: "2em", padding: "0.6em", backgroundColor: "transparent", width: "50%", alignSelf: "center" }} onClick={submitExpenseData}>Add expense</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExpenseModal