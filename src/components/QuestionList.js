import React from "react";
import PropTypes from "prop-types";
import Question from './Question';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import CardColumns from 'react-bootstrap/CardColumns';


function QuestionList(props){
  // const bodyStyle = {
  //   fontFamily: 'helvetica',
    
  // }
  console.log("quiz list being displayed")
  useFirestoreConnect([
    { collection: 'questions' }
  ]);

  const questions = useSelector(state => state.firestore.ordered.questions);

  if(isLoaded(questions)) {
    return (
      <React.Fragment>
          {/* <div className="container" > */}
          <CardColumns>
                {questions.map((question) => {
                  return <Question
                    whenQuestionClicked = { props.onQuestionSelection }
                    category = {question.category} 
                    question = {question.question} 
                    price = {question.price}
                    answer = {question.answer}
                    id = {question.id}
                    key = {question.id}/>
                })}
            </CardColumns>
        {/* </div> */}
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