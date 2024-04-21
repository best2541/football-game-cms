import {
  SUBMIT_UPDATE_PASSWORD_REQUEST_SUCCESS
} from "./types"

export const saveNewPassword = (value) => async (dispatch) => {
  try {
    // CALL API SAVE NEW PASSWORD with value
    dispatch({
      type: SUBMIT_UPDATE_PASSWORD_REQUEST_SUCCESS
    })
  } catch (error) {
    console.log(error)
  }
}