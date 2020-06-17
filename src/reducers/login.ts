import { AnyAction } from 'redux'
import { LOGIN_ACTIONS } from '../epics/login/action'
import { User } from '../models/user'

export interface LoginState {
  currentUser: User | undefined
}

const initState: LoginState = {
  currentUser: undefined,
}

export default function loginReducer(state: LoginState = initState, action: AnyAction) {
  switch (action.type) {
    case LOGIN_ACTIONS.POST_LOGIN:
      return { ...initState }
    case LOGIN_ACTIONS.POST_LOGIN_SUCCESS:
      const loginUser = action.payload
      return { ...state, currentUser: loginUser }
    default:
      return state
  }
}
