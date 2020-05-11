import uuid from 'uuid/v4'
import { User } from '../model'

export const userList: Array<User> = [
  {
    id: 'user_00000',
    name: '房東',
    email: 'joy4707710@gmail.com',
    password: 'password123',
    phone: '0912345678',
    session: '',
    role: 'admin',
  },
  {
    id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    name: 'Arty',
    email: 'joy4707710@gmail.com',
    password: 'password123',
    phone: '0912345678',
    session: 'abcdefg',
    role: 'user',
  },
  {
    id: uuid(),
    name: 'kaya',
    email: 'joy4707710@gmail.com',
    password: 'password123',
    phone: '0912345678',
    session: '',
    role: 'user',
  },
]
