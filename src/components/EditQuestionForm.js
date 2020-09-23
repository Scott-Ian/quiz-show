import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

function EditQuestionForm(props) {
  const firestore = useFirestore();
  useFirestoreConnect([
    {
      collection: 'questions',
      doc: props.selectedQuestion
    }
  ])

  const question = useSelector(state => state.firestore.data.questions[props.selectedQuestion]);
  console.log(question);
  

  function handleEditQuestionFormSubmission(event) {
    event.preventDefault();
    props.onEditQuestion();
    const propertiesToUpdate = {
      category: event.target.category.value,
      question: event.target.question.value,
      price: event.target.price.value,
      answer: event.target.answer.value,
      correctAnswerCount: question.correctAnswerCount,
      incorrectAnswerCount: question.incorrectAnswerCount,
    }
    return firestore.update({collection: 'questions', doc: props.selectedQuestion }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        originalQuestion={question}
        formSubmission={handleEditQuestionFormSubmission} />
    </React.Fragment>
  )
}

EditQuestionForm.propTypes = {
  selectedQuestion: PropTypes.string,
  onEditQuestion: PropTypes.func
};

export default EditQuestionForm;