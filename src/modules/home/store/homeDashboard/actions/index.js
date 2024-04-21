import { 
  UPDATE_HOME_DASHBOARD_DATA, 
  UPDATE_HOME_DASHBOARD_LOADING,
  UPDATE_HOME_DASHBOARD_ACCOUNT_CHOICE,
  UPDATE_HOME_DASHBOARD_FILTER
} from "./types"
import { dashboardData, accountChoice } from "../../../domain/home.mock"
import { notifySuccess, notifyFailed } from "@src/components/toast/notifyTopCenter"

export const updateHomeDashboardData = (filter) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOME_DASHBOARD_LOADING, payload: true })
    // CALL API DASHBOARD DATA
    dispatch({ type: UPDATE_HOME_DASHBOARD_LOADING, payload: false })
    dispatch({ type: UPDATE_HOME_DASHBOARD_DATA, payload: dashboardData })
  } catch (error) {
    console.log(error)
  }
}

export const updateHomeDashboardAccountChoice = () => async (dispatch) => {
  try {
    // CALL API ACCOUNT CHOICE
    dispatch({ type: UPDATE_HOME_DASHBOARD_ACCOUNT_CHOICE, payload: accountChoice })
  } catch (error) {
    console.log(error)
  }
}

export const updateHomeDashboardFilter = (filter) => (dispatch) => {
  dispatch({ type: UPDATE_HOME_DASHBOARD_LOADING, payload: true })
  dispatch({ 
    type: UPDATE_HOME_DASHBOARD_FILTER, 
    payload: {
      account: filter.submitData.account,
      month: filter.submitData.month
    }
  })
  dispatch({ type: UPDATE_HOME_DASHBOARD_LOADING, payload: false })
}