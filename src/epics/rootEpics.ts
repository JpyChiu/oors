import { combineEpics } from 'redux-observable'
import hotelEpics from './hotel/hotelEpics'
import reservationEpics from './reservation/reservationEpics'

export default combineEpics(...hotelEpics, ...reservationEpics)
