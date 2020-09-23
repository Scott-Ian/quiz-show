import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function QuestionDetails(props) {
  useFirestoreConnect([
    { collection: 'questions' }
  ]);

  console.log('Firestore:');
  console.log( props.firestore);
  console.log(props.firestore.data.questions[props.displayStateReducer.selectedQuestion]);

  // let thisQuestion = {};
  // props.firestore.get({ collection: 'questions', doc: props.displayStateReducer.selectedQuestion }).then((question) => {
  //   thisQuestion = {
  //     category: question.get("category"),
  //     question: question.get("question"),
  //     price: question.get("price"),
  //     answer: question.get("answer"),
  //     correctAnswerCount: question.get("correctAnswerCount"),
  //     incorrectAnswerCount: question.get("incorrectAnswerCount"),
  //     id: question.id
  //   }
  // })

  // const question = props.firestore.get({ collection: 'questions', doc: props.displayStateReducer.selectedQuestion })
  // const thisQuestion = {
  //       category: question.get("category"),
  //       question: question.get("question"),
  //       price: question.get("price"),
  //       answer: question.get("answer"),
  //       correctAnswerCount: question.get("correctAnswerCount"),
  //       incorrectAnswerCount: question.get("incorrectAnswerCount"),
  //       id: question.id
  //     }
  //const thisQuestion = useSelector(props=> props.firestore.questions[props.displayStateReducer.selectedQuestion]);
 // const thisQuestion = questions[props.displayStateReducer.selectedQuestion];


  const thisQuestion = props.firestore.data.questions[props.displayStateReducer.selectedQuestion];
  console.log(props.displayStateReducer.selectedQuestion);
  if (thisQuestion) {
    return (
      <React.Fragment>
        <h1>Question Details</h1>
        <h3>Category: {thisQuestion.category} </h3>
        <hr />
        <h3>{thisQuestion.question}</h3>
        <h3>{thisQuestion.answer}</h3>
        <h3>Number of Correct Answers: {thisQuestion.correctAnswerCount}</h3>
        <h3>Number of Incorrect Answers: {thisQuestion.incorrectAnswerCount}</h3>
        <h3>{thisQuestion.price}</h3>
        <hr />
        <button className="btn btn-info" onClick={props.OnClickingEdit}>Update Ticket</button>
        <button className="btn btn-alert" onClick={() => props.onClickingDelete(props.displayStateReducer.selectedQuestion)}>Delete Question</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading Question Details...</h3>
      </React.Fragment>

    )
  }

}

QuestionDetails.propTypes = {
  selectedQuestion: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

const mapStateToProps = state => {
  return {
    displayStateReducer: state.displayStateReducer,
    firestore: state.firestore
  }
}

QuestionDetails = connect(mapStateToProps)(QuestionDetails);

export default QuestionDetails;
