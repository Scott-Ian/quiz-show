import { firestoreReducer } from 'redux-firestore';
import {combineReducers} from 'redux';
import displayStateReducer from './display-state-reducer'

const rootReducer = combineReducers({
  display: displayStateReducer,
  firestore: firestoreReducer,
});

export default rootReducer;