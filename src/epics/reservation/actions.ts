import { Reservation, ReservationPostReqBody } from '@src/models/reservation'

export const RESERVATION_ACTIONS = {
  POST_RESERVATION: '@RESERVATION/POST_RESERVATION',
  POST_RESERVATION_SUCCESS: '@RESERVATION/POST_RESERVATION_SUCCESS',
  POST_RESERVATION_FAILED: '@RESERVATION/POST_RESERVATION_FAILED',
  GET_USER_RESERVATION: '@RESERVATION/GET_USER_RESERVATION',
  GET_USER_RESERVATION_SUCCESS: '@RESERVATION/GET_USER_RESERVATION_SUCCESS',
  GET_USER_RESERVATION_FAILED: '@RESERVATION/GET_USER_RESERVATION_FAILED',
  PUT_RESERVATION: '@RESERVATION/PUT_RESERVATION',
  PUT_RESERVATION_SUCCESS: '@RESERVATION/PUT_RESERVATION_SUCCESS',
  PUT_RESERVATION_FAILED: '@RESERVATION/PUT_RESERVATION_FAILED',
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

export const putReservation = (payload: { status: string; reservationId: string }) => ({
  type: RESERVATION_ACTIONS.PUT_RESERVATION,
  payload,
})

export const putReservationSuccess = (payload: Reservation) => ({
  type: RESERVATION_ACTIONS.PUT_RESERVATION_SUCCESS,
  payload,
})

export const putReservationFailed = () => ({
  type: RESERVATION_ACTIONS.PUT_RESERVATION_FAILED,
})
