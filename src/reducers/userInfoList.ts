import { AnyAction } from 'redux'

export interface UsersInfo {
  name: string
  email: string
  gender: string
  birthday: string
  password: string
}

export interface UsersInfoListState {
  items: UsersInfo[]
}

const initState: UsersInfoListState = {
  items: [],
}

export default UsersInfo
