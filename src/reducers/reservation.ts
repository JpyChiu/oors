import { AnyAction } from 'redux'
import { RESERVATION_ACTIONS } from '../epics/reservation/actions'
import { Reservation } from '../models/reservation'

export interface ReservationState {
  userReservationList: Reservation[]
}

// Fake Data
const initState: ReservationState = {
  userReservationList: [],
}

export default function hotelReducer(state: ReservationState = initState, action: AnyAction) {
  switch (action.type) {
    case RESERVATION_ACTIONS.POST_RESERVATION_SUCCESS:
      return { ...state, userReservationList: { ...action.payload } }
    case RESERVATION_ACTIONS.GET_USER_RESERVATION_SUCCESS:
      return { ...state, userReservationList: action.payload }
    case RESERVATION_ACTIONS.PUT_RESERVATION_SUCCESS:
      return {
        ...state,
        userReservationList: state.userReservationList.map((reservation: Reservation) =>
          reservation.id === action.payload.id ? action.payload : reservation,
        ),
      }
    case RESERVATION_ACTIONS.POST_RESERVATION_FAILED:
    case RESERVATION_ACTIONS.GET_USER_RESERVATION_FAILED:
    case RESERVATION_ACTIONS.PUT_RESERVATION_FAILED:
    default:
      return state
  }
}
