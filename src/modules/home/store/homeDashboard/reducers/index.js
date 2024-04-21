import  { 
  UPDATE_HOME_DASHBOARD_DATA, 
  UPDATE_HOME_DASHBOARD_LOADING,
  UPDATE_HOME_DASHBOARD_ACCOUNT_CHOICE,
  UPDATE_HOME_DASHBOARD_FILTER
} from "../actions/types"

const initialState = {
  loading: false,
  data: {},
  accountChoice: [],
  filter: {
    month: 1,
    account: {
      value: "",
      label: ""
    }
  }
}

const homeDashboardReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_HOME_DASHBOARD_DATA:
      return {
        ...state,
        data: payload
      }
    case UPDATE_HOME_DASHBOARD_LOADING:
      return {
        ...state,
        loading: payload
      }
    case UPDATE_HOME_DASHBOARD_ACCOUNT_CHOICE:
      return {
        ...state,
        accountChoice: payload
      }
    case UPDATE_HOME_DASHBOARD_FILTER:
      return {
        ...state.filter,
        account: payload.account,
        month: payload.month
      }
    default:
      return state
  }
}

export default homeDashboardReducer