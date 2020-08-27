import {createStore,applyMiddleware, combineReducers} from 'redux'
import userSetReducer from './User/userSetReducer.js';
import examReducer from './Exam/ExamReducer.js'
import logger from 'redux-logger'  

const reducer=combineReducers({userSetReducer,examReducer})

const store = createStore(reducer,applyMiddleware(logger));


export default store;