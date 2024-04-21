import {
  REQUEST_DROPDOWN_LIST_FROM,
  REQUEST_LOADING
} from "../../actions/main/types"

const initialState = {
  dropdownListFrom: [],
  loadingSpinner: true
}

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REQUEST_DROPDOWN_LIST_FROM:
      return {
       ...state,
       dropdownListFrom: payload.dropdownListFrom
     }
    case REQUEST_LOADING: {
      return {
        ...state,
        loadingSpinner: payload.loadingSpinner
      }
    }
    default:
      return state
  }
}

export default mainReducer
