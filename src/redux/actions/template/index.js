import {
  COPY_TEMPLATES,
  CREATE_TEMPLATES,
  DELETE_TEMPLATES,
  INFO_TEMPLATES,
  RETRIEVE_TEMPLATES,
  RETRIEVE_TEMPLATES_SENDER,
  RETRIEVE_TEMPLATES_SENDERS,
  UPDATE_TEMPLATES,
  CLEAR_DATA_TEMPLATE,
  GET_LIST_PARAMETER
} from "./types"

export const retrieveTemplateList = (response) => async (dispatch) => {
  dispatch({
    type: RETRIEVE_TEMPLATES,
    payload: response.data
  })
}

export const infomationTemplate = (response) => async (dispatch) => {
  dispatch({
    type: INFO_TEMPLATES,
    payload: response.data.data
  })
}
export const createTemplateList = (response) => async (dispatch) => {
  dispatch({
    type: CREATE_TEMPLATES,
    payload: response.data
  })
}
export const updateTemplateList = (response) => async (dispatch) => {
  dispatch({
    type: UPDATE_TEMPLATES,
    payload: response.data
  })
}
export const deleteTemplateList = (response) => async (dispatch) => {
  dispatch({
    type: DELETE_TEMPLATES,
    payload: response
  })
}
export const copyTemplateList = (response) => async (dispatch) => {
  dispatch({
    type: COPY_TEMPLATES,
    payload: response
  })
}
export const retrieveSenderList = (response) => async (dispatch) => {
  dispatch({
    type: RETRIEVE_TEMPLATES_SENDER,
    payload: response
  })
}

export const retrieveSender = (response) => async (dispatch) => {
  dispatch({
    type: RETRIEVE_TEMPLATES_SENDERS,
    payload: response
  })
}

export const clearDataInfo = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DATA_TEMPLATE,
    payload: undefined
  })
}

export const getParameter = (response) => async (dispatch) => {
  dispatch({
    type: GET_LIST_PARAMETER,
    payload: response
  })
}
