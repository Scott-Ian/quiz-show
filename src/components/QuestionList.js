import React from "react";
import PropTypes from "prop-types";
import Question from './Question';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function QuestionList(props){
  console.log("quiz list being displayed")
  useFirestoreConnect([
    { collection: 'questions' }
  ]);

  const questions = useSelector(state => state.firestore.ordered.questions);

  if(isLoaded(questions)) {
    return (
      <React.Fragment>
        {questions.Map((question) => {
          return <Question
            whenQuestionClicked = { props.onQuestionSelection }
            thisQuestion = { question } />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

QuestionList.propTypes = {
  onQuestionSelection: PropTypes.func
}

export default QuestionList;