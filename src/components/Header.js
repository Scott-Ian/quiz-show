import React from "react";
import Button from 'react-bootstrap/Button';
import * as a from '../actions/index';
import { connect } from 'react-redux';


function Header(props){

  const handleClickingAdd = () => {
    const { dispatch } = props;
    const action = a.newFormDisplay();
    dispatch(action);
    console.log(props.display)
  }

  return (
    <React.Fragment>
      <h1>Quiz Show</h1>
      <Button variant='info' onClick={handleClickingAdd}>Add Question</Button>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    display: state.display,
    selectedQuestion: state.selectedQuestion,
  }
}

Header = connect(mapStateToProps)(Header);

export default Header;

