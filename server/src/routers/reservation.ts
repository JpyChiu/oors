import express from 'express'
import { userList } from '../fakeData/user'
import { orderQueue } from '../fakeData/orderQueue'
import { User } from '../model'

const ReservationRouter = express.Router()

// Book hotel
ReservationRouter.post('/', function(req, res) {})

// Retrieve Orders which belong target user
ReservationRouter.get('/retrieve_user_orders', function(req, res) {
  const targer_user = validate_authorization(req.headers.authorization)
  if (!targer_user) {
    res.status(401).send('Please login first')
  } else {
    res.send('ok')
  }
})

// User cancel order, and admin reject/receive order
ReservationRouter.put('/:id', function(req, res) {})

const validate_authorization = (session: string | undefined): User | undefined => {
  if (!session) {
    return undefined
  }
  return userList.find(user => user.session === session)
}

export default ReservationRouter
