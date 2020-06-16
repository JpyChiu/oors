import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { LOGIN_ACTIONS, postLoginSuccess, postLoginFailed } from './action'

export const loginEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(LOGIN_ACTIONS.POST_LOGIN),
    exhaustMap(({ payload }) =>
      ajax.post(`/api/user/login`, payload).pipe(
        map((res: AjaxResponse) => postLoginSuccess(res.response)),
        catchError(() => of(postLoginFailed())),
      ),
    ),
  )

export default [loginEpic]
