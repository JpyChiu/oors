import express from 'express'
import uuid from 'uuid/v4'

export const orderQueue = [
  {
    id: uuid(),
    hotel_id: 'room_00001',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: true,
  },
  {
    id: uuid(),
    hotel_id: 'room_00001',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200514',
    end_date: '20200515',
    price: 1000,
    is_paid: true,
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: true,
  },
]
export const outdateOrder = [
  {
    id: uuid(),
    hotel_id: 'room_00001',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200410',
    end_date: '20200411',
    price: 1000,
    status: 'outdate',
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    status: 'canceled',
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    status: 'reject',
  },
]

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
