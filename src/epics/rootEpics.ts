import { combineEpics } from 'redux-observable'
import hotelEpics from './hotel/hotelEpics'
import reservationEpics from './reservation/reservationEpics'
import loginEpics from './login/loginEpics'
import registerEpic from './register/registerEpic'

export default combineEpics(...hotelEpics, ...reservationEpics, ...loginEpics, ...registerEpic)
