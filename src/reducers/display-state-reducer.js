import * as c from './../actions/ActionTypes';

export default (state = {display: c.QUESTION_LIST, selectedQuestion: null}, action) => {
  switch (action.type) {
    case c.UPDATE_DISPLAY: // case "EDIT_FORM"
      const { display, selectedQuestion } = action;
      const newState = { ...state, display:display, selectedQuestion:selectedQuestion}; 
      return newState;
    default: 
      return state;
  }
};