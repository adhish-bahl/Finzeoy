import React from 'react';

function AddIncomeModal() {


    const handleChange = () => {

    }

    return (
        <div id="postModal" className="modal">
            <div className="modal--content">
                <div className="modal--header">
                    <span className="close postModalClose">&times;</span>
                    <h2>Add Expense</h2>
                </div>
                <div className="modal--mainContent">
                    <div>
                        <input type="text" name="title" id="title" placeholder='Give Title' onChange={handleChange} />
                        <select name="typeOfArticle" id="articleType" onChange={handleChange} >
                            <option value="investment">Investment</option>
                            <option value="general">General</option>
                        </select>
                        <textarea type="" name="article" id="article" placeholder='Article Here' onChange={handleChange} />
                        <button id="postButton" type="submit" >Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddIncomeModal