import express from 'express'
import { userList } from '../fakeData/user'
import { orderQueue } from '../fakeData/orderQueue'
import { User } from '../model'
import uuid from 'uuid'

const ReservationRouter = express.Router()

// Book hotel
ReservationRouter.post('/', (req, res) => {
  const target_user = validate_authorization(req.headers.authorization)
  if (!target_user) {
    res.status(401).send('Please login first')
  } else {
    const order = {
      ...req.body,
      id: uuid(),
      tenant_id: target_user.id,
      is_paid: false,
      status: 'live',
    }
    orderQueue.push(order)
    res.send(order)
  }
})

// Retrieve Orders which belong target user
ReservationRouter.get('/retrieve_user_orders', (req, res) => {
  const target_user = validate_authorization(req.headers.authorization)
  if (!target_user) {
    res.status(401).send('Please login first')
  } else {
    const user_order_list = orderQueue.filter(order => {
      return order.tenant_id === target_user.id
    })
    res.send(user_order_list)
  }
})

// User cancel order, and admin reject/receive order
ReservationRouter.put('/:id', (req, res) => {
  const target_user = validate_authorization(req.headers.authorization)
  const req_id = req.params.id
  if (!target_user) {
    res.status(401).send('Please login first')
  } else {
    const target_order = orderQueue.find(order => order.id === req_id)
    if (!target_order) {
      res.status(400).send('This order is not belong the target user')
    } else {
      let targetIdx = -1
      orderQueue.find((order, idx) => {
        if (order.id === req_id) {
          orderQueue[idx] = {
            ...orderQueue[idx],
            ...req.body,
          }
          targetIdx = idx
          return true
        }
        return false
      })
      res.send(orderQueue[targetIdx])
    }
  }
})

const validate_authorization = (session: string | undefined): User | undefined => {
  if (!session) {
    return undefined
  }
  return userList.find(user => user.session === session)
}

export default ReservationRouter
