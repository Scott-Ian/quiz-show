import React from "react";
import Button from 'react-bootstrap/Button';
// import Header from 'react-bootstrap/Header';
import * as a from '../actions/index';
import { useDispatch } from 'react-redux';

function Header(props){
  const headerStyle = {
    fontFamily: 'helvetica',
    fontSize: '50px',
    textAlign: 'center',
    backgroundColor: 'purple',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '10px'
  }

  const h1Header = {
    color: 'gold',
    fontWeight: 'bold'
  }
  const dispatch = useDispatch();
  const handleClickingAdd = () => {
    const action = a.newFormDisplay();
    dispatch(action);
  }

  return (
    <React.Fragment>
      <div className="page-header" style={headerStyle}>
        <h1 style={h1Header}>Quiz Show</h1>
        <Button variant='info' onClick={handleClickingAdd}>Add Question</Button>
      </div>
    </React.Fragment>
  );
}

export default Header;

