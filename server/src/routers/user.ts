import express from 'express'
import uuid from 'uuid/v4'
import { userList } from '../fakeData/user'
import { User } from '../model'

const UserRouter = express.Router()

UserRouter.get('/', function(req, res) {
  res.send(userList)
})

UserRouter.post('/', function(req, res) {
  const user: User = {
    ...req.body,
    id: uuid(),
    session: new Date().valueOf(),
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
