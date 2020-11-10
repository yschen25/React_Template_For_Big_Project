import {all, call, put, takeEvery} from 'redux-saga/effects';
import {GET_MEMBER_DATA, GET_MEMBER_SUCCESS, DELETE_MEMBER_DATA} from '../action';
import Api from './api';

function* fetchData() {
    const data = yield call(Api.getAll);
    yield put({type: GET_MEMBER_SUCCESS, payload: data.data});
}

function* getMemberData() {
    yield takeEvery(GET_MEMBER_DATA, fetchData);
}

function* deleteMemberData() {
    yield put({type: DELETE_MEMBER_DATA});
}

export default function* rootSaga() {
    yield all([
        getMemberData(),
        deleteMemberData()
    ]);
}