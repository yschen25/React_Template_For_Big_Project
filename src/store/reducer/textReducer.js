import {GET_TEXT, ADD_TEXT, DELETE_TEXT} from '../../action';

const initState = {
    text: 'Initial Text'
};

const textReducer = (state = initState, action) => {
    switch (action.type) {
    case GET_TEXT:
        return {text: 'Initial Text'}
    case ADD_TEXT:
        if(state !== '' && state.text !== undefined){
            return {text: state.text.concat(' ', action.payload)};
        }
        return {text: action.payload};
    case DELETE_TEXT:
        return '';
    default:
        return state;
    }
};

export {
    initState,
    textReducer
}
