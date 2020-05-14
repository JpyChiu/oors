import { Hotel } from '../../models/hotel'

export const HOTEL_ACTIONS = {
  GET_HOTEL_LIST: '@HOTEL/GET_LIST',
  GET_HOTEL_LIST_SUCCESS: '@HOTEL/GET_LIST_SUCCESS',
  GET_HOTEL_LIST_FAILED: '@HOTEL/GET_LIST_FAILED',
  GET_ENABLED_HOTEL_LIST: '@HOTEL/GET_ENABLED_LIST',
  GET_ENABLED_HOTEL_LIST_SUCCESS: '@HOTEL/GET_ENABLED_LIST_SUCCESS',
  GET_ENABLED_HOTEL_LIST_FAILED: '@HOTEL/GET_ENABLED_LIST_FAILED',
}

export const getAllHotels = () => ({
  type: HOTEL_ACTIONS.GET_HOTEL_LIST,
})

export const getAllHotelsSuccess = (payload: Hotel[]) => ({
  type: HOTEL_ACTIONS.GET_HOTEL_LIST_SUCCESS,
  payload,
})

export const getAllHotelsFailed = () => ({
  type: HOTEL_ACTIONS.GET_HOTEL_LIST_FAILED,
})
