import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../containers/home/containers';
import About from '../containers/about/containers';
import Career from '../containers/career/containers';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reactHooks" exact component={About}/>
        <Route path="/reactHooksAndRedux" exact component={Career}/>
    </Switch>
);

export default Routes;
