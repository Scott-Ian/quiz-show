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



class App extends React.Component {

  constructor(props) {
    super(props);
  }
  // functions here...
  handleChangingSelectedQuestion = (id) => {
    const { dispatch } = this.props;
    const action = a.questionDetails(id);
    dispatch(action);
  }

  returnHome = () => {
    const { dispatch } = this.props;
    const action = a.homeList();
    dispatch(action);
  }

  handleClickingEdit = (id) => {
    const { dispatch } = this.props;
    const action = a.editForm(id);
    dispatch(action);
  }

  handleClickingDelete =(id) => {
    const {dispatch } = this.props;
    const action = a.deleteQuestion(id);
    dispatch(action);
  }

  render() {
    // Handle determing what to display:
    let displayComponent;
    // let buttonText;
    console.log(this.props.displayStateReducer);
    console.log(this.props.selectedQuestion);
    if(this.props.display === c.QUESTION_LIST) {
      displayComponent = <QuestionList onQuestionSelection = {this.handleChangingSelectedQuestion} />
    } else if (this.props.displayStateReducer === c.QUESTION_DETAILS) {
      displayComponent = <QuestionDetails selectedQuestion={this.props.firestore.get({collection: 'questions', doc:this.props.selectedQuestion})} onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete}/>
    } else if (this.props.display === c.NEW_FORM) {
      displayComponent = <NewQuestionForm onNewQuestionCreation={this.returnHome} />
    } else if (this.props.display === c.EDIT_FORM) {
      displayComponent =<EditQuestionForm onEditQuestion ={this.returnHome} />
    } else if (this.props.display === c.DELETE_Q) {
      displayComponent=<DeleteConfirm onDeleteQuestion = {this.returnHome} />
    }
    console.log(displayComponent)
    return(
      <React.Fragment>
        <Header />
        {displayComponent}
      </React.Fragment>
    )
  }
}

App.propTypes = {
  display: PropTypes.object,
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