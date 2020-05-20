import { combineReducers } from 'redux'
import hotelReducer, { HotelState } from './hotel'
import reservationReducer, { ReservationState } from './reservation'

export interface StoreState {
  hotels: HotelState
  reservation: ReservationState
}

export default combineReducers<StoreState>({
  hotels: hotelReducer,
  reservation: reservationReducer,
})
