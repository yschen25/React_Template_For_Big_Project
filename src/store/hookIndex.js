import React, {useReducer} from 'react';
import {textReducer, initState} from './reducer/textReducer';
import PropTypes from 'prop-types';

const Store = React.createContext();

const createStore = (reducer, initState) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return {state, dispatch}
}

const Provider = ({children}) => {
    const store = createStore(textReducer, initState);
    return <Store.Provider value={store}>{children}</Store.Provider>
}

Provider.propTypes = {
    children: PropTypes.object
};

export {Store, Provider};

