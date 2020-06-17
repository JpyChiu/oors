export interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  session: string
  role: 'user' | 'admin'
}

export interface UsersForm {
  name: string
  email: string
  password: string
  phone: number
}