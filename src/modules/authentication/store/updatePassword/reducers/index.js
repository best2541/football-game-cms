import {
  SUBMIT_UPDATE_PASSWORD_REQUEST_SUCCESS
} from "../actions/types"

const initialState = {

}

const updatePasswordReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SUBMIT_UPDATE_PASSWORD_REQUEST_SUCCESS:
      return {
        state: initialState
      }
    default:
      return state
  }
}

export default updatePasswordReducer