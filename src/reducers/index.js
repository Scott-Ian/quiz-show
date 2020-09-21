import { firestoreReducer } from 'redux-firestore';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: ticketListReducer,
  // new line of code below
  firestore: firestoreReducer,
  // display: displayStateReducer
});

export default rootReducer;