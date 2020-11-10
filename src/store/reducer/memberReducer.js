import {GET_MEMBER_DATA, DELETE_MEMBER_DATA, GET_MEMBER_SUCCESS} from '../../action';

const initState = {
    memberData: []
};

const memberReducer = (state = initState, action) => {
    switch (action.type) {
    case GET_MEMBER_DATA:
        return state;
    case GET_MEMBER_SUCCESS:
        return {
            ...state,
            memberData: action.payload,
        };
    case DELETE_MEMBER_DATA:
        return {memberData: []}
    default:
        return state;
    }
};

export {
    initState,
    memberReducer
}
