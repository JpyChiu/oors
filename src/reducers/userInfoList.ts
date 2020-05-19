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

export default UsersInfo
