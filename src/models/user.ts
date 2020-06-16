export interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  session: string
  role: 'user' | 'admin'
}
