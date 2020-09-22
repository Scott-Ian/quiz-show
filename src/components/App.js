import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../actions/ActionTypes';
import * as a from '../actions/index';
import { withFirestore } from 'react-redux-firebase';
import Header from './Header'
import QuestionList from './QuestionList';
import QuestionDetails from './QuestionDetails';
import NewQuestionForm from './NewQuestionForm';
import EditQuestionForm from './EditQuestionForm';
import DeleteConfirm from './DeleteConfirm';



function App(props) {

  // functions here...
  const handleChangingSelectedQuestion = (id) => {
    const { dispatch } = props;
    const action = a.questionDetails(id);
    dispatch(action);
  }

  const returnHome = () => {
    const { dispatch } = props;
    const action = a.homeList();
    dispatch(action);
  }

  const handleClickingEdit = (id) => {
    const { dispatch } = props;
    const action = a.editForm(id);
    dispatch(action);
  }

  const handleClickingDelete =(id) => {
    const {dispatch } = props;
    const action = a.deleteQuestion(id);
    dispatch(action);
  }

  // Handle determing what to display:
  let displayComponent;
  // let buttonText;

  if(props.display === c.QUESTION_LIST) {
    displayComponent = <QuestionList onQuestionSelection = {handleChangingSelectedQuestion} />
  } else if (props.display === c.QUESTION_DETAILS) {
    displayComponent = <QuestionDetails selectedQuestion={this.props.firestore.get({collection: 'questions', doc:this.props.selectedQuestion})} onClickingEdit={handleClickingEdit} onClickingDelete={handleClickingDelete}/>
  } else if (props.display === c.NEW_FORM) {
    displayComponent = <NewQuestionForm onNewQuestionCreation={returnHome} />
  } else if (props.display === c.EDIT_FORM) {
    displayComponent =<EditQuestionForm onEditQuestion ={returnHome} />
  } else if (props.display === c.DELETE_Q) {
    displayComponent=<DeleteConfirm onDeleteQuestion = {returnHome} />
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
  selectedQuestion: PropTypes.string,
  buttonText: PropTypes.func
}

const mapStateToProps = state => {
  return {
    display: state.display,
    selectedQuestion: state.selectedQuestion,
  }
}

App = connect(mapStateToProps)(App);

export default withFirestore(App);