import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { IncomingHotel, Hotel } from '../../models/hotel'
import {
  HOTEL_ACTIONS,
  getCitiesAndPersonSuccess,
  getCitiesAndPersonFailed,
  getEnabledHotelsSuccess,
  getEnabledHotelsFailed,
} from './actions'

const responseToModel = (resp: IncomingHotel): Hotel => ({
  id: resp.id,
  hotelName: resp.hotel_name,
  city: resp.city,
  pricePerDay: resp.price_per_day,
  person: resp.person,
  description: resp.description,
  pictureSrc: resp.picture_src,
})

const responseToModelList = (resp: any): Hotel[] => resp.map((entity: IncomingHotel) => responseToModel(entity))

export const getAllHotelsEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(HOTEL_ACTIONS.GET_CITIES_AND_PERSON),
    exhaustMap(() =>
      ajax.get('/api/hotel/count').pipe(
        map((res: AjaxResponse) => getCitiesAndPersonSuccess(res.response)),
        catchError(() => of(getCitiesAndPersonFailed())),
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
