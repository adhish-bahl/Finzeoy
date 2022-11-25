import React, { useEffect, useState } from 'react';

function AddBudgetModal() {

    const changeHandler = () => {
        // Code Here
    }

    const submitBudgetData = () => {
        // Code Here
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
                                <p className="title" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Title</p>
                                <input type={"text"} name="title" onChange={changeHandler} id="titleInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />

                                <p className="goal" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Goal</p>
                                <input type={"text"} name="goal" onChange={changeHandler} id="goalInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />

                                <p className="list" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>List</p>
                                <select name="list" id="listInput" onChange={changeHandler} style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                </select>

                                <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                                <input type={"number"} name="amount" onChange={changeHandler} id="amountInput" style={{ textAlign: "left", width: "80%", padding: "5px" }} />
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