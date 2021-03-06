import express from 'express'
import uuid from 'uuid'
import { orderQueue } from '../fakeData/orderQueue'
import { hotelList } from '../fakeData/hotel'
import { OrderQueue } from '../model'
import { validate_authorization } from '../util'

const ReservationRouter = express.Router()

// Book hotel
ReservationRouter.post('/', (req, res) => {
  console.log(req)
  const target_user = validate_authorization(req.headers.authorization)
  if (!target_user) {
    res.status(401).send('Please login first')
  } else {
    const target_hotel = hotelList.find(hotel => req.body.hotel_id === hotel.id)
    const order: OrderQueue = {
      ...req.body,
      id: uuid(),
      tenant_id: target_user.id,
      tenant_name: target_user.name,
      is_paid: false,
      status: 'waiting',
      hotel_info: {
        person: target_hotel?.person,
        city: target_hotel?.city,
        thumbnail: target_hotel?.picture_src,
      },
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
      if (target_user.role === 'admin') {
        return order
      }
      return order.tenant_id === target_user.id
    })
    // const response_order_list = user_order_list.map(order => {
    //   const target_hotel = hotelList.find(hotel => order.hotel_id === hotel.id)
    //   const map_user_order = {
    //     ...order,
    //     hotel_info: { person: target_hotel?.person, city: target_hotel?.city, thumbnail: target_hotel?.picture_src },
    //   }
    //   return map_user_order
    // })
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

export default ReservationRouter
