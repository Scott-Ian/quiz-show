import displayStateReducer from '../../reducers/display-state-reducer';
import * as a from './../../actions';


describe ('displayStateReducer', () => {
  
  const currentState = {
    display: a.HOME_DISPLAY,
    selectedQuestion: 4
  }
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(displayStateReducer(currentState, {type: null})).toEqual(currentState);
  });

})