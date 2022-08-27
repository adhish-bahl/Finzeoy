import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Routing() {
  return (
    <div>
        <Router>
            <div className="App">
                <Switch>

                    <Route exact path="/ourteam">
                        <Header  user={auth ? name : "Guest"} auth={auth} authentication={pull_auth} getEmail={pull_email}  getName={pull_name} getUserId={pull_userId}/>
                        <Team />
                        <Footer />
                    </Route>

                    <Route >
                        <PageNotFound />
                    </Route>

                </Switch>
            </div>
        </Router>
    </div>
  )
}

export default Routing