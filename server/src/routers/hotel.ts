import express from 'express'
import { orderQueue } from '../fakeData/orderQueue'
import { hotelList } from '../fakeData/hotel'

const HotelRouter = express.Router()

// find enabled room
HotelRouter.get('/find', function(req, res) {
  const start_date = convert_yyyymmdd_to_date(req.query.start)
  const end_date = convert_yyyymmdd_to_date(req.query.end)
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
