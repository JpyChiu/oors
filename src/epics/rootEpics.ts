import { combineEpics } from 'redux-observable'
import hotelEpics from './hotel/hotelEpics'

export default combineEpics(...hotelEpics)
