import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenQuestionClicked(props.id)}>
      <p>{props.thisQuestion}</p>
      </div>
    </React.Fragment>
  );
}

Question.propTypes = {
  whenQuestionClicked: PropTypes.func,
  thisQuestion: PropTypes.object
};

export default Question;