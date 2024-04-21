import { fromList } from "../../../@fake-db/main/dropdownList"
import {
  REQUEST_DROPDOWN_LIST_FROM,
  REQUEST_LOADING
} from "./types"
import { axiosInstance } from "@src/helper/api"
import useJwt from '@src/helper/auth/jwt/jwtDefaultConfig'

const commuEndPoint = useJwt.commuEndPoint

export const getSenderList = (payload) => {
  return axiosInstance.get(
    `${commuEndPoint}/Dropdown/GetDropdownSender`, payload
  )
}

export const requestDropdownListFrom = () => async (dispatch) => {
  try {
    const response = await getSenderList()
    const dropdownList = response.data.map(function (obj) {
      obj['value'] = obj['id']
      delete obj['id']
      obj['label'] = obj['text']
      delete obj['text']
      return obj
    })
    await dispatch({
      type: REQUEST_DROPDOWN_LIST_FROM,
      payload: {
        dropdownListFrom: dropdownList
      }
    })
  } catch (err) {

  }
}

export const requestLoading = (data) => async (dispatch) => {

  dispatch({
    type: REQUEST_LOADING,
    payload: {
      loadingSpinner: data
    }
  })

}