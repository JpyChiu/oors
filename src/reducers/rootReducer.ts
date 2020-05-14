import { combineReducers } from 'redux'
import hotelReducer, { HotelState } from './hotel'

export interface StoreState {
  hotels: HotelState
}

export default combineReducers<StoreState>({
  hotels: hotelReducer,
})
