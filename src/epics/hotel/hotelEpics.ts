import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { IncomingHotel, Hotel } from '../../models/hotel'
import { HOTEL_ACTIONS, getAllHotelsSuccess, getAllHotelsFailed } from './actions'

const responseToModel = (resp: IncomingHotel): Hotel => ({
  id: resp.id,
  hotelName: resp.hotel_name,
  pricePerDay: resp.price_per_day,
  person: resp.person,
  description: resp.description,
})

const responseToModelList = (resp: any): Hotel[] => resp.map((entity: IncomingHotel) => responseToModel(entity))

export const getPostListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(HOTEL_ACTIONS.GET_HOTEL_LIST),
    exhaustMap(() =>
      ajax.get('/api/hotel').pipe(
        map((res: AjaxResponse) => getAllHotelsSuccess(responseToModelList(res.response))),
        catchError(() => of(getAllHotelsFailed())),
      ),
    ),
  )

export default [getPostListEpic]
