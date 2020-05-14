import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { IncomingHotel, Hotel } from '../../models/hotel'
import {
  HOTEL_ACTIONS,
  getAllHotelsSuccess,
  getAllHotelsFailed,
  getEnabledHotelsSuccess,
  getEnabledHotelsFailed,
} from './actions'

const responseToModel = (resp: IncomingHotel): Hotel => ({
  id: resp.id,
  hotelName: resp.hotel_name,
  pricePerDay: resp.price_per_day,
  person: resp.person,
  description: resp.description,
})

const responseToModelList = (resp: any): Hotel[] => resp.map((entity: IncomingHotel) => responseToModel(entity))

export const getAllHotelsEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(HOTEL_ACTIONS.GET_HOTEL_LIST),
    exhaustMap(() =>
      ajax.get('/api/hotel').pipe(
        map((res: AjaxResponse) => getAllHotelsSuccess(responseToModelList(res.response))),
        catchError(() => of(getAllHotelsFailed())),
      ),
    ),
  )

export const getEnabledHotelsEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST),
    exhaustMap(({ payload: { startDate, endDate, city, person } }) =>
      ajax.get(`/api/hotel/find?startDate=${startDate}&endDate=${endDate}&city=${city}&person=${person}`).pipe(
        map((res: AjaxResponse) => getEnabledHotelsSuccess(responseToModelList(res.response))),
        catchError(() => of(getEnabledHotelsFailed())),
      ),
    ),
  )

export default [getAllHotelsEpic, getEnabledHotelsEpic]
