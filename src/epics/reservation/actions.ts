import { Reservation, ReservationPostReqBody } from '../../models/reservation'

export const RESERVATION_ACTIONS = {
  POST_RESERVATION: '@RESERVATION/POST_RESERVATION',
  POST_RESERVATION_SUCCESS: '@RESERVATION/POST_RESERVATION_SUCCESS',
  POST_RESERVATION_FAILED: '@RESERVATION/POST_RESERVATION_FAILED',
  GET_USER_RESERVATION: '@RESERVATION/GET_USER_RESERVATION',
  GET_USER_RESERVATION_SUCCESS: '@RESERVATION/GET_USER_RESERVATION_SUCCESS',
  GET_USER_RESERVATION_FAILED: '@RESERVATION/GET_USER_RESERVATION_FAILED',
}

export const postReservation = (payload: ReservationPostReqBody) => ({
  type: RESERVATION_ACTIONS.POST_RESERVATION,
  payload: {
    hotel_id: payload.hotelId,
    start_date: payload.startDate,
    end_date: payload.endDate,
    price: payload.price,
  },
})

export const postReservationSuccess = (payload: Reservation) => ({
  type: RESERVATION_ACTIONS.POST_RESERVATION_SUCCESS,
  payload,
})

export const postReservationFailed = () => ({
  type: RESERVATION_ACTIONS.POST_RESERVATION_FAILED,
})

export const getUserReservation = () => ({
  type: RESERVATION_ACTIONS.GET_USER_RESERVATION,
})

export const getUserReservationSuccess = (payload: Reservation[]) => ({
  type: RESERVATION_ACTIONS.GET_USER_RESERVATION_SUCCESS,
  payload,
})

export const getUserReservationFailed = () => ({
  type: RESERVATION_ACTIONS.GET_USER_RESERVATION_FAILED,
})
