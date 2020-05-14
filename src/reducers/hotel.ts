import { AnyAction } from 'redux'
import { HOTEL_ACTIONS } from '../epics/hotel/actions'
import { Hotel } from '../models/hotel'

export interface HotelState {
  hotelList: Hotel[]
  enabledHotelList: Hotel[]
}

const initState = {
  hotelList: [],
  enabledHotelList: [],
}

export default function hotelReducer(state: HotelState = initState, action: AnyAction) {
  switch (action.type) {
    case HOTEL_ACTIONS.GET_HOTEL_LIST_SUCCESS:
      return { ...state, hotelList: action.payload }
    case HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_SUCCESS:
      return { ...state, enabledHotelList: action.payload }
    case HOTEL_ACTIONS.GET_HOTEL_LIST_FAILED:
    case HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_FAILED:
    default:
      return state
  }
}
