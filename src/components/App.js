import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../actions/ActionTypes';
import * as a from '../actions/index';
import { withFirestore } from 'react-redux-firebase';
import Header from './Header'


function App(props) {

  // functions here...
  const handleChangingSelectedQuestion = (id) => {
    const { dispatch } = this.props;
    const action = a.questionDetails(id);
    dispatch(action);
  }

  // Handle determing what to display:
  let displayComponent;
  let buttonText;

  if(this.state.display === c.QUESTION_LIST) {
    displayComponent = <QuestionList onQuestionSelection = {this.handleChangingSelectedQuestion} />
  } else if (this.state.display === c.QUESTION_DETAILS) {
    displayComponent = <QuestionDetails selectedQuestion={this.props.firestore.get({collection: 'questions', doc:this.props.selectedQuestion})} />
  }

  return (
    <React.Fragment>
      <Header />
      {displayComponent}
    </React.Fragment>
);
}

App.propTypes = {
  display: PropTypes.string,
  selectedQuestion: PropTypes.string
}

const mapStateToProps = state => {
  return {
    display: state.display,
    selectedQuestion: state.selectedQuestion,
  }
}

App = connect(mapStateToProps)(App);

export default withFirestore(App);