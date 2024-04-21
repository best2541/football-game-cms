import {REQUEST_MENU} from "../actions/types"

const initialState = {

}

const menuReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REQUEST_MENU:
      return {
        state: initialState
      }
    default:
      return state
  }
}

export default menuReducer