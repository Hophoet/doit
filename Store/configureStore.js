// import { createStore, combineReducers } from 'redux'
// import doitManager from './Reducers/DoitReducer'
// export default createStore(doitManager)


import { createStore, combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import doitManager from './Reducers/DoitReducer'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key:'root',
  storage:AsyncStorage
}

export default createStore(persistReducer(persistConfig, doitManager))
