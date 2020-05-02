import { createStore, combineReducers } from 'redux'
import doitManager from './Reducers/DoitReducer'
export default createStore(doitManager)
