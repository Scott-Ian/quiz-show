import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, { displayStateReducer: { display: 'QUESTION_LIST', selectedQuestion: null }});

const rrfProps = {
  firebase,
  config: {
        userProfile: "users"
    },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

