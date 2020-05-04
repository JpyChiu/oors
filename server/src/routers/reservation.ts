import express from 'express'
import { orderQueue } from '../fakeData/orderQueue'
import { outdateOrder } from '../fakeData/outdateOrder'

const ReservationRouter = express.Router()

// Book hotel
ReservationRouter.post('/', function(req, res) {})

// Retrieve Orders which belong target user
ReservationRouter.get('/retrieve_user_orders', function(req, res) {
  res.send()
})

// User cancel order, and admin reject/receive order
ReservationRouter.put('/', function(req, res) {})

export default ReservationRouter
