import { combineReducers } from 'redux'
import hotelReducer, { HotelState } from './hotel'
import loginReducer, { LoginState } from './login'
import reservationReducer, { ReservationState } from './reservation'

export interface StoreState {
  hotels: HotelState
  login: LoginState
  reservation: ReservationState
}

export default combineReducers<StoreState>({
  hotels: hotelReducer,
  login: loginReducer,
  reservation: reservationReducer,
})
