import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function QuestionDetails(props) {
  useFirestoreConnect([
    { collection: 'questions' }
  ]);

  // console.log('Firestore:');
  // console.log( props.firestore);
  // console.log(props.firestore.data.questions[props.displayStateReducer.selectedQuestion]);

  const [formSubmitted, setFormSubmission] = useState(false); //the hooks!!!
  const [answeredCorrectly, setAnswerState] = useState(null);

  const thisQuestion = props.firestore.data.questions[props.displayStateReducer.selectedQuestion];


  const onAnswerSubmit = (event) => {
    event.preventDefault();
    const answer = event.target.answerSubmission.value;
    setFormSubmission(true);
    
    if (thisQuestion.answer === answer) {
      setAnswerState(true);
      // const propertiesToUpdate = {
      //   correctAnswerCount: thisQuestion.correctAnswerCount +1,
      // }
      // props.firestore.update({collection: 'questions', doc: props.selectedQuestion }, propertiesToUpdate)
    } else {
      setAnswerState(false);
      // const propertiesToUpdate = {
      //   correctAnswerCount: thisQuestion.incorrectAnswerCount +1,
      // }
      // props.firestore.update({collection: 'questions', doc: props.selectedQuestion }, propertiesToUpdate)
    }

    // alter 'counter' - which determines whether to display or hide answer form and answer
    // determine if a submitted answer is correct or incorrect
    // update firestore entry with new guess count(correct/incorrect)
    // update if answered correctly flag... 
  }

  console.log(props.displayStateReducer.selectedQuestion);
  if (thisQuestion && !formSubmitted) {
    return (
      <React.Fragment>
        <Container>
        <h1>Question Details</h1>
        <h3>Category: {thisQuestion.category} </h3>
        <hr />
        <h3>{thisQuestion.question}</h3>
        <h3>Number of Correct Answers: {thisQuestion.correctAnswerCount}</h3>
        <h3>Number of Incorrect Answers: {thisQuestion.incorrectAnswerCount}</h3>
        <h3>{thisQuestion.price}</h3>
        <hr />
        <button className="btn btn-info" onClick={() => props.onClickingEdit(props.displayStateReducer.selectedQuestion)}>Update Ticket</button>
        <button className="btn btn-alert" onClick={() => props.onClickingDelete(props.displayStateReducer.selectedQuestion)}>Delete Question</button>
        <hr/>
        <h2>Guess the answer:</h2>
        <Form onSubmit={onAnswerSubmit}>
          <Form.Group controlId="answerSubmission">
            <Form.Label>Submit Answer:</Form.Label>
            <Form.Control type='text' placeholder="Answer Here"/>
          </Form.Group>
          <button className= 'btn-info' type='submit'>Submit!</button>
        </Form>
        </Container>
      </React.Fragment>
    )
  } else if (thisQuestion && formSubmitted && !answeredCorrectly){
    return (
      <React.Fragment>
        <h1>You guessed wrong, sucker!</h1>
        <h3>The correct answer was: {thisQuestion.answer}</h3>
      </React.Fragment>
    )
  } else if (thisQuestion && formSubmitted && answeredCorrectly){
    return (
      <React.Fragment>
        <h1>You Did it! You're a genius!</h1>
        <h3>The correct answer was: {thisQuestion.answer}</h3>
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
