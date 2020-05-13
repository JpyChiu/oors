import { userList } from './fakeData/user'
import { User } from './model'

export const validate_authorization = (session: string | undefined): User | undefined => {
  if (!session) {
    return undefined
  }
  return userList.find(user => user.session === session)
}

export const convert_yyyymmdd_to_date = (yyyymmdd: string): Date => {
  const y = parseInt(yyyymmdd.substring(0, 4))
  const m = parseInt(yyyymmdd.substring(4, 6))
  const d = parseInt(yyyymmdd.substring(6, 8))
  return new Date(y, m, d)
}
