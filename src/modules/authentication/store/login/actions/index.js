import { UPDATE_USER_NAME_LOGIN } from "./types"

export const updateUserName = (value) => async (dispatch) => {
  dispatch({
    type: UPDATE_USER_NAME_LOGIN,
    payload: value
  })
}