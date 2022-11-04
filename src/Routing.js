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
import RegistrationLogin from './components/RegistrationLogin'
import RegistrationSignup from './components/RegistrationSignup'

function Routing() {
  return (
    <div>
        <Router>
            <div className="App">
                <Switch>

                    {/* LANDING PAGE */}
                    <Route exact path="/">
                        <LandingPage />
                    </Route>

                    {/* LOGIN SIGNUP PAGE */}
                    <Route path="/signup">
                        <RegistrationSignup isLoginPage="false" />
                    </Route>
                    
                    <Route path="/login">
                        <RegistrationLogin isLoginPage="true"/>
                    </Route>


                    
                    {/* STUDENT MODULES */}
                    <Route exact path="/learning">
                        <LoginSignUpHeader />
                        <LearningPage />
                        <Footer />
                    </Route>

                    <Route path="/discussion">
                        <LoginSignUpHeader />
                        <Discussion />
                    </Route>

                    {/* ADVISOR MODULES */}
                    <Route path="/advisors">
                        <LoginSignUpHeader />
                        <AdvisorProfile />
                    </Route>

                    {/* END USER MODULES */}
                    <Route path="/general">
                        <GeneralUserHomePage username="xxx" />
                    </Route>
                    
                    <Route path="/feed">
                        <GeneralUserHomePage username="xxx" />
                    </Route>

                    {/* PAGE NOT FOUND  */}
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