import { AnyAction } from 'redux'
import { USER_INFO_LIST_ACTIONS } from '../epics/usersInfoList/action'

export interface UsersInfo {
  account: string
  name: string
  email: string
  password: string
  phone: number
}

export interface UsersInfoListState {
  items: UsersInfo[]
}

const initState: UsersInfoListState = {
  items: [],
}

const reducer = (state: UsersInfoListState = initState, action: AnyAction): UsersInfoListState => {
  switch (action.type) {
    case USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST:
      return {
        ...initState,
      }
    case USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST_SUCCESS:
      return {
        items: action.payload,
      }
    case USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST_FAILURE:
      return {
        ...initState,
      }
    default:
      return state
  }
}

export default reducer
