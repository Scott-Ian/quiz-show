import * as a from './ActionTypes'

export const editForm = id => ({
  type: a.EDIT_ACTION,
  display: a.EDITED_FORM,
  selectedQuestion: id
});


export const newFormDisplay = () => ({
  type: a.NEW_FORM,
  display: a.NEW_FORM,
});