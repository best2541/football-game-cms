import { UPDATE_HOME_DETAIL_INFORMATION, HOME_DETAIL_LOADING } from "../actions/types"

const initialState = {
  loading: false,
  homeDetail: {
    smsSub: "",
    deliRate: "",
    cost: ""
  },
  activity: {
    deli: "",
    reject: "",
    progess: "",
    unDeli: ""
  },
  mCoupon: {
    coupon: "",
    open: "",
    redeem: ""
  }
}

const homeDetailReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case UPDATE_HOME_DETAIL_INFORMATION:
      return {
        ...state,
        homeDetail: {
          smsSub: payload.smsSub,
          deliRate: payload.deliRate,
          cost: payload.cost
        },
        activity: {
          deli: payload.deli,
          reject: payload.reject,
          progess: payload.progess,
          unDeli: payload.unDeli
        },
        mCoupon: {
          coupon: payload.coupon,
          open: payload.open,
          redeem: payload.redeem
        }
      }
      case HOME_DETAIL_LOADING:
        return {
          ...state,
          loading: payload
        }
    default:
      return state
  }
}

export default homeDetailReducer