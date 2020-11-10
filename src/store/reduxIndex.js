import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {memberReducer} from './reducer/memberReducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(memberReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);