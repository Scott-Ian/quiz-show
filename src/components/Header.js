import React from "react";
import Button from 'react-bootstrap/Button';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';

function Header(props){
  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }

  return (
    <React.Fragment>
      <h1>Quiz Show</h1>
      <Button variant='info' onClick={handleClickingAdd}>Add Question</Button>
    </React.Fragment>
  );
}

export default Header;

