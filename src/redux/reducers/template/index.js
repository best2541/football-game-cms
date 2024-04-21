import {
  COPY_TEMPLATES,
  CREATE_TEMPLATES,
  DELETE_TEMPLATES,
  INFO_TEMPLATES,
  RETRIEVE_TEMPLATES,
  RETRIEVE_TEMPLATES_SENDER,
  UPDATE_TEMPLATES,
  CLEAR_DATA_TEMPLATE,
  GET_LIST_PARAMETER
} from "../../actions/template/types"

const initialState = {
  templateList: undefined,
  copy: undefined,
  deleted: undefined,
  created: undefined,
  updated: undefined,
  sender: [],
  info: undefined,
  variable: []
}

const communicationTemplateReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RETRIEVE_TEMPLATES:
      return { ...state, templateList: payload }
    case COPY_TEMPLATES:
      return { ...state, copy: payload }
    case DELETE_TEMPLATES:
      return { ...state, deleted: payload }
    case CREATE_TEMPLATES:
      return { ...state, created: payload }
    case UPDATE_TEMPLATES:
      return { ...state, updated: payload }
    case RETRIEVE_TEMPLATES_SENDER:
      return { ...state, sender: payload }
    case INFO_TEMPLATES:
      return { ...state, info: payload }
    case CLEAR_DATA_TEMPLATE:
      return { ...state, info: undefined }
    case GET_LIST_PARAMETER:
      return { ...state, variable: payload }
    default:
      return state
  }
}

export default communicationTemplateReducer
