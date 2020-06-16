import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { REGISTER_ACTIONS, registerUserSuccess, registerUserFailure } from "./action";

export const registerUserEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(REGISTER_ACTIONS.REGISTER_USER),
    exhaustMap(({ payload }) =>
      ajax.post(`/api/user`, payload).pipe(
        map((res: AjaxResponse) => registerUserSuccess(res.response)),
        catchError(() => of(registerUserFailure())),
      ),
    ),
  )

export default [registerUserEpic]
