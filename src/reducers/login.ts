import { AnyAction } from 'redux'
import { LOGIN_ACTIONS } from '../epics/login/action'

export interface LoginResponseBody {
  key: string
  name: string
  status: string
}

export interface LoginState extends LoginResponseBody {
  resp: object[] | any
}

const initState: LoginState = {
  resp: [],
  key: '',
  name: '',
  status: '',
}

export default function loginReducer(state: LoginState = initState, action: AnyAction) {
  switch (action.type) {
    case LOGIN_ACTIONS.POST_LOGIN:
      return { ...initState }
    case LOGIN_ACTIONS.POST_LOGIN_SUCCESS:
    //   const { SessionKey, UserName } = LocalStorageKeys
    //   const { key: sessionKey, name } = action.payload
    //   localStorage.setItem(SessionKey, sessionKey)
    //   localStorage.setItem(UserName, name)
      return { ...action.payload }
    case LOGIN_ACTIONS.POST_LOGIN_FAILED:
      return { ...action.payload }
    default:
      return state
  }
}