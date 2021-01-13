import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import Routes from '../routes';
import Header from '../components/header';

const App = () => {
    return (
        <div>
            <ConnectedRouter history={history}>
                <Header/>
                <Routes/>
            </ConnectedRouter>
        </div>
    );
};

export default hot(App);
