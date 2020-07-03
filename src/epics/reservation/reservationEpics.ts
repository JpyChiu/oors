import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'

import { Reservation, IncomingReservation } from '@src/models/reservation'
import {
  RESERVATION_ACTIONS,
  postReservationSuccess,
  postReservationFailed,
  getUserReservationSuccess,
  getUserReservationFailed,
  putReservationSuccess,
  putReservationFailed,
} from './actions'
import responseUtil from '@src/utils/responseUtil'

const responseToModel = (resp: IncomingReservation): Reservation => ({
  id: resp.id,
  hotelId: resp.hotel_id,
  hotelPerson: resp.hotel_info.person,
  hotelCity: resp.hotel_info.city,
  hotelThumbnail: resp.hotel_info.thumbnail,
  tenantId: resp.tenant_id,
  tenantName: resp.tenant_name,
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
        tap(() => responseUtil.success(RESERVATION_ACTIONS.POST_RESERVATION_SUCCESS)),
        map((res: AjaxResponse) => postReservationSuccess(responseToModel(res.response))),
        catchError(() => {
          responseUtil.error(RESERVATION_ACTIONS.POST_RESERVATION_FAILED)
          return of(postReservationFailed())
        }),
      ),
    ),
  )

export const getUserReservationEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(RESERVATION_ACTIONS.GET_USER_RESERVATION),
    exhaustMap(() =>
      ajax.get('/api/reservation/retrieve_user_orders', { Authorization: localStorage.getItem('sessionKey') }).pipe(
        map((res: AjaxResponse) => getUserReservationSuccess(responseToModelList(res.response))),
        catchError(() => of(getUserReservationFailed())),
      ),
    ),
  )

export const putReservationEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(RESERVATION_ACTIONS.PUT_RESERVATION),
    exhaustMap((action: AnyAction) =>
      ajax
        .put(
          `/api/reservation/${action.payload.reservationId}`,
          { status: action.payload.status },
          { Authorization: localStorage.getItem('sessionKey') },
        )
        .pipe(
          map((res: AjaxResponse) => putReservationSuccess(responseToModel(res.response))),
          catchError(() => of(putReservationFailed())),
        ),
    ),
  )

export default [postReservationEpic, getUserReservationEpic, putReservationEpic]
