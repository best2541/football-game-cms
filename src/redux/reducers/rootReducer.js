// ** Redux Imports
import { combineReducers } from "redux"

// ** Reducers Imports
import main from "./main"
import auth from "./auth"
import navbar from "./navbar"
import layout from "./layout"
import template from "./template"
import updatePassword from "../../modules/authentication/store/updatePassword/reducers"
import login from "../../modules/authentication/store/login/reducers"
import homeDashboard from "../../modules/home/store/homeDashboard/reducers"
import homeDetail from "../../modules/home/store/homeDetail/reducers"

const rootReducer = combineReducers({
  main,
  auth,
  navbar,
  layout,
  template,

  // authentication
  updatePassword,
  login,


  // homeDashboard
  homeDashboard,
  homeDetail

})

export default rootReducer
