import Reset_style from './styles/reset_style';
import Global_style from './styles/global_style';

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/';
import {Provider as HookProvider} from './store/hookIndex';
import {Provider} from 'react-redux'
import store from './store/reduxIndex';

ReactDOM.render(
    <HookProvider>
        <Provider store={store}>
            <Reset_style/>
            <Global_style/>
            <Routes/>
        </Provider>
    </HookProvider>
    , document.getElementById('app'));
