import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import LearningPage from './components/LearningPage';
import Registration from './components/Registration';
import PageNotFound from './components/PageNotFound'
import LoginSignUpHeader from './components/LoginSignUpHeader';
import GeneralUserHomePage from './components/GeneralUserHomePage';

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
                    
                    <Route exact path="/learning">
                        <LoginSignUpHeader />
                        <LearningPage />
                        <Footer />
                    </Route>

                    <Route path="/signup">
                        <Registration />
                    </Route>

                    <Route path="/general">
                        <GeneralUserHomePage username="xxx" />
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