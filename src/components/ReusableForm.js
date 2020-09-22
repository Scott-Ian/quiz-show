import React from 'react';
import PropTypes from 'prop-types';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

function QuestionForm(props) {
  let category = "";
  let question = "";
  let price = "";
  let answer = "";
  if (props.originalQuestion !== null){
    ({category, question, price, answer} = props);
  }
  
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmission}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type='text' placeholder="Enter category" defaultValue={category}/>
        </Form.Group>
        <Form.Group controlId="question">
          <Form.Label>Question</Form.Label>
          <Form.Control type='text' placeholder="Enter question text" defaultValue={question}/>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type='text' placeholder="Enter price" defaultValue={price} />
        </Form.Group>
        <Form.Group controlId="answer">
          <Form.Label>Answer</Form.Label>
          <Form.Control type='text' placeholder="Enter answer" defaultValue={answer}/>
        </Form.Group>
        <button className='mb-3' variant='success' type="submit" size='lg' block>Add new question</button>
      </Form>
    </React.Fragment>
  )
}

QuestionForm.propTypes = {
  originalQuestion: PropTypes.object
}

export default QuestionForm;