import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewQuestionForm(props){
  const firestore = useFirestore();

  function addQuestionToFirestore(event) {
    event.preventDefault();
    props.onNewQuestionCreation();
    return firestore.collection('questions').add(
      {
        category: event.target.category.value,
        question: event.target.question.value,
        price: event.target.price.value,
        answer: event.target.answer.value,
        correctAnswerCount: 0,
        incorrectAnswerCount: 0,
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        originalQuestion={null}
        formSubmission={addQuestionToFirestore} />
    </React.Fragment>
  )
}

NewQuestionForm.propTypes = {
  onNewQuestionCreation: PropTypes.func
}

export default NewQuestionForm;