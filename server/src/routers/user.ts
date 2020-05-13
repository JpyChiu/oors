import express from 'express'
import uuid from 'uuid/v4'
import { userList } from '../fakeData/user'
import { User } from '../model'

const UserRouter = express.Router()

// Retrieve All user API
UserRouter.get('/', (req, res) => {
  res.send(userList)
})

// Retrieve user API
UserRouter.get('/:id', (req, res) => {
  const req_id = req.params.id
  const target_user = userList.find(user => user.id === req_id)
  if (!target_user) {
    res.status(404).send('not exist user')
  } else {
    res.send(target_user)
  }
})

// Register API
UserRouter.post('/', (req, res) => {
  const new_user: User = {
    ...req.body,
    id: uuid(),
    session: new Date().valueOf().toString(),
    role: 'user',
  }
  userList.push(new_user)
  res.send(new_user)
})

// TODO: login API
UserRouter.post('/login', (req, res) => {
  const target_user = userList.find(user => user.email === req.body.email)
  if (!target_user) {
    res.status(401).send('This email is not register')
  } else {
    if (target_user.password !== req.body.password) {
      res.status(401).send('This password is wrong')
    } else {
      target_user.session = new Date().valueOf().toString()
      res.send(target_user)
    }
  }
})

// Update user API
UserRouter.put('/:id', (req, res) => {
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
