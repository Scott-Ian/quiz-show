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