import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { REGISTER_ACTIONS, registerUserSuccess, registerUserFailure } from './action'
import responseUtil from '@src/utils/responseUtil'

export const registerUserEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(REGISTER_ACTIONS.REGISTER_USER),
    exhaustMap(({ payload }) =>
      ajax.post(`/api/user`, payload).pipe(
        tap((resp: AjaxResponse) => responseUtil.success(REGISTER_ACTIONS.REGISTER_USER_SUCCESS, resp.response)),
        map((res: AjaxResponse) => registerUserSuccess(res.response)),
        catchError(() => {
          responseUtil.error(REGISTER_ACTIONS.REGISTER_USER_FAILURE)
          return of(registerUserFailure())
        }),
      ),
    ),
  )

export default [registerUserEpic]
