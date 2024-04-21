import {REQUEST_MENU} from "./types"

export const requestMenuBar = () => (dispatch) => {
  // call menu api
  let menu
  try {
    dispatch({
      type: REQUEST_MENU,
      payload: menu
    })
  } catch (err) {

  }
}