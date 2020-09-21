import React from 'react';
import PropTypes from 'prop-types';
// import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';

function QuestionForm(props) {
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="">
          <Form.Label></Form.Label>
          <Form.Control type='text' placeholder="" defaultValue={} />
        </Form.Group>
        <Button className='mb-3' variant='success' type="submit" size='lg' block>{buttonText}</Button>
      </Form>
    </React.Fragment>
  )
}

QuestionForm.propTypes = {

}

export default QuestionForm;