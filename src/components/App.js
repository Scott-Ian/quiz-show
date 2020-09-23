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
    console.log(id);
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
    console.log(id);
    const {dispatch } = this.props;
    const action = a.deleteQuestion(id);
    dispatch(action);
  }

  handleDeletingQuestion = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({collection: 'questions', doc: id});
    const action = a.homeList();
    dispatch(action);
  }

  render() {
    // Handle determing what to display:
    let displayComponent;
    // let buttonText;
    console.log(this.props.displayStateReducer.display);
    console.log(this.props.displayStateReducer.selectedQuestion);
    if(this.props.displayStateReducer.display === c.QUESTION_LIST) {
      displayComponent = <QuestionList onQuestionSelection = {this.handleChangingSelectedQuestion} />
    } else if (this.props.displayStateReducer.display === c.QUESTION_DETAILS) {
      // console.log(this.props.displayStateReducer.selectedQuestion)
      // let thisQuestion = {};
      // this.props.firestore.get({collection: 'questions', doc: this.props.displayStateReducer.selectedQuestion}).then((question) => {
      //   thisQuestion = {
      //     category: question.get("category"),
      //     question: question.get("question"),
      //     price: question.get("price"),
      //     answer: question.get("answer"),
      //     correctAnswerCount: question.get("correctAnswerCount"),
      //     incorrectAnswerCount: question.get("incorrectAnswerCount"),
      //     ...question.data()
      //     id: question.id
      //   }
      // }).then(() => {
      //   displayComponent = <QuestionDetails selectedQuestion={thisQuestion} onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete}/>
      // })
      displayComponent = <QuestionDetails onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete}/>
    } else if (this.props.displayStateReducer.display === c.NEW_FORM) {
      displayComponent = <NewQuestionForm onNewQuestionCreation={this.returnHome} />
    } else if (this.props.displayStateReducer.display === c.EDIT_FORM) {
      displayComponent =<EditQuestionForm selectedQuestion={this.props.displayStateReducer.selectedQuestion} onEditQuestion ={this.returnHome} />
    } else if (this.props.displayStateReducer.display === c.DELETE_Q) {
      displayComponent=<DeleteConfirm selectedQuestion={this.props.displayStateReducer.selectedQuestion} onDeleteQuestion = {this.returnHome} onDeleteForReals = {this.handleDeletingQuestion} />
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
    displayStateReducer: state.displayStateReducer,
    selectedQuestion: state.selectedQuestion,
  }
}

App = connect(mapStateToProps)(App);

export default withFirestore(App);