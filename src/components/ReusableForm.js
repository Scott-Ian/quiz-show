import React from 'react';
import PropTypes from 'prop-types';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';

function QuestionForm(props) {
  let category = null;
  let question = null;
  let price = null;
  let answer = null;
  if (props.originalQuestion !== null){
    ({category, question, price, answer} = props);
  }
  
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmission}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type='text' id="category" placeholder="Enter category" value={category}/>
        </Form.Group>
        <Form.Group controlId="question">
          <Form.Label>Question</Form.Label>
          <Form.Control type='text' id="question" placeholder="Enter question text" value={question}/>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type='text' id="price" placeholder="Enter price" value={price} />
        </Form.Group>
        <Form.Group controlId="answer">
          <Form.Label>Answer</Form.Label>
          <Form.Control type='text' id="answer" placeholder="Enter answer" value={answer}/>
        </Form.Group>
        <Button className='mb-3' variant='success' type="submit" size='lg' block>{buttonText}</Button>
      </Form>
    </React.Fragment>
  )
}

/*
Category,
question,
price,
answer,
correctAnswerCount,
incorrectAnswerCount,
*/

QuestionForm.propTypes = {
  buttonText: PropTypes.string
}

export default QuestionForm;