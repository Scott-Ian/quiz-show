import * as c from './ActionTypes'

export const editForm = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.EDIT_FORM,
  selectedQuestion: id
});

export const newFormDisplay = () => ({
  type: c.UPDATE_DISPLAY,
  display: c.NEW_FORM,
  selectedQuestion: null
});

export const questionDetails = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.QUESTION_DETAILS,
  selectedQuestion: id
});

export const homeList = () => ({
  type: c.UPDATE_DISPLAY,
  display: c.HOME_LIST,
  selectedQuestion: null
});

export const deleteQuestion = (id) => ({
  type: c.UPDATE_DISPLAY,
  display: c.DELETE_Q,
  selectedQuestion: id
});