import React from 'react';
import PropTypes from 'prop-types';

function QuestionDetails(props) {

  return (
    <React.Fragment>
      <h3>{props.question.question}</h3>
      <hr/>
      {/* Specific details regarding Question go here! */}
    </React.Fragment>

    
  )

}

export default QuestionDetails;
