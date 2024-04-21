import { UPDATE_HOME_DETAIL_INFORMATION, HOME_DETAIL_LOADING } from "./types"
import { accountInformation } from "../../../domain/home.mock"

export const getAccountInformation = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOME_DETAIL_LOADING, payload: true })
    // CALL API GET ACCOUNTINFORMATION
    const response = accountInformation
    id = response.accountId
    if (id) {
      dispatch({
        type: UPDATE_HOME_DETAIL_INFORMATION,
        payload: {
          smsSub: response.smsSub,
          deliRate: response.deliRate,
          cost: response.cost,
          deli: response.deli,
          reject: response.reject,
          progess: response.progess,
          unDeli: response.unDeli,
          coupon: response.coupon,
          open: response.open,
          redeem: response.redeem
        }
      })
    }
    dispatch({ type: HOME_DETAIL_LOADING, payload: false })
  } catch (error) {
    console.log(error)
  }
}