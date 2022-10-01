import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import LearningPage from './components/LearningPage';
import Registration from './components/Registration';
import PageNotFound from './components/PageNotFound'
import LoginSignUpHeader from './components/LoginSignUpHeader';
import GeneralUserHomePage from './components/GeneralUserHomePage';
import LandingPage from './components/LandingPage';
import AdvisorProfile from './components/AdvisorProfile';
import PageHeader from './components/PageHeader';
import Discussion from './components/Discussion';

function Routing() {
  return (
    <div>
        <Router>
            <div className="App">
                <Switch>

                    <Route exact path="/">
                        <LoginSignUpHeader />
                        <LandingPage />
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

                    <Route path="/advisors">
                        <LoginSignUpHeader />
                        {/* <PageHeader hearderItem="" */}
                        <AdvisorProfile />
                    </Route>

                    <Route path="/discussion">
                        <LoginSignUpHeader />
                        <Discussion />
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