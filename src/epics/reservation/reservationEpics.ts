import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { Reservation, IncomingReservation } from '../../models/reservation'
import {
  RESERVATION_ACTIONS,
  postReservationSuccess,
  postReservationFailed,
  getUserReservationSuccess,
  getUserReservationFailed,
} from './actions'

const responseToModel = (resp: IncomingReservation): Reservation => ({
  id: resp.id,
  hotelId: resp.hotel_id,
  tenantId: resp.tenant_id,
  startDate: resp.start_date,
  endDate: resp.end_date,
  price: resp.price,
  isPaid: resp.is_paid,
  status: resp.status,
})

const responseToModelList = (resp: any): Reservation[] =>
  resp.map((entity: IncomingReservation) => responseToModel(entity))

export const postReservationEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(RESERVATION_ACTIONS.POST_RESERVATION),
    exhaustMap((action: AnyAction) =>
      ajax.post('/api/reservation/', action.payload, { Authorization: localStorage.getItem('sessionKey') }).pipe(
        map((res: AjaxResponse) => postReservationSuccess(responseToModel(res.response))),
        catchError(() => of(postReservationFailed())),
      ),
    ),
  )

export const getUserReservationEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(RESERVATION_ACTIONS.GET_USER_RESERVATION),
    exhaustMap(() =>
      ajax.get('/api/reservation', { Authorization: localStorage.getItem('sessionKey') }).pipe(
        map((res: AjaxResponse) => getUserReservationSuccess(responseToModelList(res.response))),
        catchError(() => of(getUserReservationFailed())),
      ),
    ),
  )

export default [postReservationEpic, getUserReservationEpic]