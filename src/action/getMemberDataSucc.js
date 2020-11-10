import { GET_MEMBER_SUCCESS } from './index';

export const getMemberDataSucc = (data) => ({
    type: GET_MEMBER_SUCCESS,
    payload: data
});
