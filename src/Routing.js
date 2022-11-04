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
import RegistrationLogin from './components/RegistrationLogin';
import RegistrationSignup from './components/RegistrationSignup';
import FeedMainPage from './components/FeedMainPage';
import GeneralPage from './components/GeneralPage';

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

                    {/* SIGNUP PAGE */}
                    <Route path="/signup">
                        <RegistrationSignup isLoginPage="false" />
                    </Route>

                    {/* LOGIN PAGE */}
                    <Route path="/login">
                        <RegistrationLogin isLoginPage="true"/>
                    </Route>
                    
                    {/* STUDENT MODULES */}
                    <Route exact path="/learning">
                        <PageHeader title1="Learn" title1Route="/learning" title2="Discussion" title2Route="/discussion" titleState="true" username="ABC BCD" />
                        <LearningPage />
                        <Footer />
                    </Route>

                    <Route path="/discussion">
                        <PageHeader title1="Learn" title1Route="/learning" title2="Discussion" title2Route="/discussion" titleState="false" username="ABC BCD" />
                        <Discussion />
                    </Route>

                    {/* ADVISOR MODULES */}
                    <Route path="/advisors">
                        <PageHeader title1="Home" title1Route="/advisors"  titleState="true" username="ABC BCD" />
                        <AdvisorProfile />
                    </Route>

                    {/* END USER MODULES */}
                    <Route path="/general">
                        <PageHeader title1="Tracker" title1Route="/general" title2="Feed" title2Route="/feed" titleState="true" username="ABC BCD" />
                        <GeneralPage />
                        {/* <GeneralUserHomePage username="xxx" /> */}
                    </Route>
                    
                    <Route path="/feed">
                        <PageHeader title1="Tracker" title1Route="/general" title2="Feed" title2Route="/feed" titleState="false" username="ABC BCD" />
                        <FeedMainPage />
                        {/* <GeneralUserHomePage username="xxx" /> */}
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