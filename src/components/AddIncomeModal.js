import React from 'react';

function AddIncomeModal() {


    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    const changeHandler = () => {
         
    }

    const options = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
      <div id="postModal" className="modal">
          <div className="modal--content" style={{ width: "30vw" }}>
              <div className="modal--header">
                  <span className="close postModalClose">&times;</span>
                  <h2>Add Income</h2>
              </div>
              <div className="modal--mainContent">
                  <div>

                      <form action="" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", overflowY: "hidden" }}>
                          <div className="leftOfEditModal" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <p className="title" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Title</p>
                              <input type={"text"} name="title" onChange={changeHandler} id="titleInput"  style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                              
                              <p className="category" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Category</p>
                              <select name="categories" id="categories" style={{ textAlign: "left", width: "80%", padding: "5px", marginTop: "5px" }} >
                                  <option value="salary">Salary</option>
                                  <option value="commision">Commision</option>
                                  <option value="interest">Interest</option>
                                  <option value="rent">Rent</option>
                                  <option value="miscellaneous">Miscellaneous</option>
                              </select>

                              <p className="amount" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }}>Amount</p>
                              <input type={"number"} name="amount" onChange={changeHandler} id="amountInput"  style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                              
                              <p className="date" style={{ textAlign: "left", width: "80%", fontWeight: "500", marginBottom: "0px" }} >Date</p>
                              
                              <input type={"date"} name="date" onChange={changeHandler} id="dateInput" defaultValue={date}  style={{ textAlign: "left", width: "80%", padding: "5px" }} />
                          </div>
                          
                      </form>



                      {/* <input type="text" name="title" id="title" placeholder='Give Title' onChange={handleChange} />
                      <select name="typeOfArticle" id="articleType" onChange={handleChange} >
                          <option value="investment">Investment</option>
                          <option value="general">General</option>
                      </select>
                      <textarea type="" name="article" id="article" placeholder='Article Here' onChange={handleChange} />
                      <button id="postButton" type="submit" >Post</button> */}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AddIncomeModal