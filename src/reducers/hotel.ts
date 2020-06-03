import { AnyAction } from 'redux'
import { HOTEL_ACTIONS } from '../epics/hotel/actions'
import { Hotel } from '../models/hotel'

export interface HotelState {
  cities: string[]
  persons: number[]
  enabledHotelList: Hotel[]
  isWaiting: boolean
}

const initState = {
  cities: [],
  persons: [],
  enabledHotelList: [],
  isWaiting: false,
}

export default function hotelReducer(state: HotelState = initState, action: AnyAction) {
  switch (action.type) {
    case HOTEL_ACTIONS.GET_CITIES_AND_PERSON_SUCCESS:
      return { ...state, cities: action.payload.cities, persons: action.payload.person }
    case HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST:
      return { ...state, isWaiting: true }
    case HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_SUCCESS:
      return { ...state, enabledHotelList: action.payload, isWaiting: false }
    case HOTEL_ACTIONS.GET_CITIES_AND_PERSON_FAILED:
    case HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_FAILED:
    default:
      return { ...state, isWaiting: false }
  }
}
