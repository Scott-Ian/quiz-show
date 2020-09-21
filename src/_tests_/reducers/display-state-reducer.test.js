import displayStateReducer from '../../reducers/display-state-reducer';
import * as a from './../../actions';


describe ('displayStateReducer', () => {
  
  const currentState = {
    display: a.QUESTION_LIST,
    selectedQuestion: 4
  }
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(displayStateReducer(currentState, {type: null})).toEqual(currentState);
  });

  test('Should alter display to show new form', () => {
    const action = a.newFormDisplay();
    expect(displayStateReducer(currentState, action)).toEqual({
      display: a.NEW_FORM,
      selectedQuestion: 4
    });
  });

  test('Should edit form elements', () => {
    const edit = a.editForm(3);               
    expect(displayStateReducer(currentState, edit)).toEqual({
      display: a.EDIT_FORM,
      selectedQuestion: 3
    });
  });

  //test('')

  /* Action Object:
  {
    type: a.EDIT_Action
    display: a.EDITED_FORM
    selectedQuestion: the new id '2344'
  }

  // States to display:
  // Question_List
  // Create New Form
  // Edit form
  // Details view
  // Confirm Delete

})*/
})