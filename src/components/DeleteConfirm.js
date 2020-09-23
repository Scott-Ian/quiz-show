import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Question from './Question';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function QuestionDelete(props) {
  
  /* useFirestoreConnect([
    { collection: 'questions' }
  ]);

  const questions = props.selectedQuestion;
  console.log(questions.id + " questions.id should be here" + questions); */

  return (
    <React.Fragment>
      <h1>Are you sure you want to delete this question?</h1>
      {/* <p>{questions.question}</p>  */}                                           
      <Button className="btn btn-alert" onClick={()=> props.onDeleteForReals(props.selectedQuestion)}>Yes</Button>

      <Button className="btn btn-alert" onClick={()=> props.onDeleteQuestion()}>NO</Button>
    </React.Fragment>
  )
}

QuestionDelete.propTypes = {
  selectedQuestion: PropTypes.object,
  onDeleteQuestion: PropTypes.func,
  onDeleteForReals: PropTypes.func
}

export default QuestionDelete;
