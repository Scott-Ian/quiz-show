import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenQuestionClicked(props.id)}>
      <p>{props.category}</p>
      <p>{props.question}</p>
      <p>{props.price}</p>
      <p>{props.answer}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Question.propTypes = {
  whenQuestionClicked: PropTypes.func,
  thisQuestion: PropTypes.object
};

export default Question;