import express from 'express'
import uuid from 'uuid/v4'

export const userList = [
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
    id: uuid(),
    name: 'Arty',
    email: 'joy4707710@gmail.com',
    password: 'password123',
    phone: '0912345678',
    session: '',
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

const UserRouter = express.Router()

UserRouter.get('/', function(req, res) {
  res.send(userList)
})

UserRouter.post('/', function(req, res) {
  const user = {
    ...req.body,
    id: uuid(),
    session: new Date().toISOString(),
    role: 'user',
  }
  userList.push(user)
  res.send(user)
})

// TODO: login API
// UserRouter.post('/login', function(req, res) {
//   res.send(user)
// })

UserRouter.put('/:id', function(req, res) {
  const req_id = req.params.id
  let targetIdx = -1
  userList.find((user, idx) => {
    if (user.id === req_id) {
      userList[idx] = {
        ...userList[idx],
        ...req.body,
      }
      targetIdx = idx
      return true
    }
    return false
  })
  res.send(userList[targetIdx])
})

export default UserRouter
