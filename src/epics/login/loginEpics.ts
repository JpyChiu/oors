import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map, tap } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'

import { LOGIN_ACTIONS, postLoginSuccess, postLoginFailed } from './action'
import responseUtil from '@src/utils/responseUtil'

export const loginEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(LOGIN_ACTIONS.POST_LOGIN),
    exhaustMap(({ payload }) =>
      ajax.post(`/api/user/login`, payload).pipe(
        tap((resp: AjaxResponse) => responseUtil.success(LOGIN_ACTIONS.POST_LOGIN_SUCCESS, resp.response)),
        map((res: AjaxResponse) => postLoginSuccess(res.response)),
        catchError(() => {
          responseUtil.error(LOGIN_ACTIONS.POST_LOGIN_FAILED)
          return of(postLoginFailed())
        }),
      ),
    ),
  )

export default [loginEpic]
