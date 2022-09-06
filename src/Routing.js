import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import Registration from './components/Registration';
import PageNotFound from './PageNotFound'

function Routing() {
  return (
    <div>
        <Router>
            <div className="App">
                <Switch>

                    <Route exact path="/">
                        {/* <Header  user={auth ? name : "Guest"} auth={auth} authentication={pull_auth} getEmail={pull_email}  getName={pull_name} getUserId={pull_userId}/>
                        <Team />
                        <Footer /> */}
                    </Route>

                    <Route path="/signup">
                        <Registration />
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