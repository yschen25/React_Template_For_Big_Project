import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Header from '../component/Header';
import Home from '../containers/home/containers';
import Story from '../containers/story/containers';
import MemberData from '../containers/memberData/containers';

const Routes = () => {

    return (
        <>
            <Router>
                <Header/>
                <Route path="/"  exact component={Home}/>
                <Route path="/story" exact component={Story}/>
                <Route path="/memberData" exact component={MemberData}/>
            </Router>
        </>
    )
};

export default Routes;
