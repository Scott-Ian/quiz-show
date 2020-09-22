import React from 'react';
import PropTypes from 'prop-types';

function QuestionDetails(props) {
  const question = props.selectedQuestion;
  return (
    <React.Fragment>
      <h1>Question Details</h1>
      <h3>Category: {question.category} </h3>
      <hr />
      <h3>{question.question}</h3>
      <h3>{question.answer}</h3>
      <h3>Number of Correct Answers: {question.correctAnswerCount}</h3>
      <h3>Number of Incorrect Answers: {question.incorrectAnswerCount}</h3>
      <h3>{question.price}</h3>
      <hr/>
      <button className="btn btn-info" onClick={props.OnClickingEdit}>Update Ticket</button>
      <button className="btn btn-alert" onClick={()=> props.onClickingDelete(question.id)}>Delete Question</button>
    </React.Fragment>
  )

}

QuestionDetails.propTypes = {
  selectedQuestion: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default QuestionDetails;
