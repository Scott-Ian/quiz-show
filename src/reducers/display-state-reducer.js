import * as c from './../actions/ActionTypes';

export default (state = {display: c.QUESTION_LIST}, action) => {
  switch (action.type) {
    case c.EDIT_FORM: // case "EDIT_FORM"
      const newState = { ...state, ...action}; 
      return newState;
    default: 
      return state;
  }
};

/*
action object = {
  type: c.EDIT_FORM,
  displaY: c.EDIT_FORM,
  selectedQuestion: questionId (3)
}

currentState = {
  display: c.QUESTION_LIST
  selectedQuestion: 32
}


  Switch statement:
    update case trigger call - boolean evaluation that determines whether the case is executed
    combine state with action {...initialObject, ...overWritingObject}
    return new state
*/