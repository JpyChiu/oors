import express from 'express'
import {orderQueue} from './reservation'

export const hotelList = [
  {
    id: 'room_00001',
    hotel_name: 'family mart',
    price_per_day: 1000,
    description: '全家就是你家',
  },
  {
    id: 'room_00002',
    hotel_name: '7-11',
    price_per_day: 1000,
    description: 'always open, seven eleven',
  },
  {
    id: 'room_00003',
    hotel_name: 'Mcdonald',
    price_per_day: 1000,
    description: '巴拉巴巴巴',
  },
]

const HotelRouter = express.Router()

// find enabled room
HotelRouter.get('/find', function(req, res) {
  const start_date: Date = convert_yyyymmdd_to_date(req.query.start)
  const end_date: Date = convert_yyyymmdd_to_date(req.query.end)
  const disabledHotelIdList = orderQueue
    .filter(order => {
      const db_start_date = convert_yyyymmdd_to_date(order.start_date)
      const db_end_date = convert_yyyymmdd_to_date(order.end_date)
      return end_date >= db_start_date && start_date <= db_end_date
    })
    .map(order => order.hotel_id)
  const enabledHotelList = hotelList.filter(hotel => !disabledHotelIdList.includes(hotel.id))
  res.send(enabledHotelList)
})

const convert_yyyymmdd_to_date = (yyyymmdd: string): Date => {
  const y = parseInt(yyyymmdd.substring(0, 4))
  const m = parseInt(yyyymmdd.substring(4, 6))
  const d = parseInt(yyyymmdd.substring(6, 8))
  return new Date(y, m, d)
}

export default HotelRouter
