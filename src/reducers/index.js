import { firestoreReducer } from 'redux-firestore';
import {combineReducers} from 'redux';
import displayStateReducer from './display-state-reducer'

const rootReducer = combineReducers({
  displayStateReducer: displayStateReducer,
  firestore: firestoreReducer,
});

export default rootReducer;