import { combineReducers } from 'redux'
import hotelReducer, { HotelState } from './hotel'
import loginReducer, { LoginState } from './login'

export interface StoreState {
  hotels: HotelState
  login: LoginState
}

export default combineReducers<StoreState>({
  hotels: hotelReducer,
  login: loginReducer,
})
