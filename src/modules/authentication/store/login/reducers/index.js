import { UPDATE_USER_NAME_LOGIN } from "../actions/types"

const initialState = {
  userName: ""
}

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_USER_NAME_LOGIN:
      return {
        ...state,
        userName: payload
      }
    default:
      return state
  }
}

export default loginReducer