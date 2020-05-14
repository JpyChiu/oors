import express from 'express'
import { orderQueue } from '../fakeData/orderQueue'
import { hotelList } from '../fakeData/hotel'
import { convert_yyyymmdd_to_date } from '../util'

const HotelRouter = express.Router()

// Retrieve all hotels
HotelRouter.get('/', (req, res) => {
  res.send(hotelList)
})

// find enabled room
HotelRouter.get('/find', (req, res) => {
  const city = req.query.city
  const person = req.query.person
  const start_date = convert_yyyymmdd_to_date(req.query.start)
  const end_date = convert_yyyymmdd_to_date(req.query.end)
  const disabledHotelIdList = orderQueue
    .filter(order => {
      const db_start_date = convert_yyyymmdd_to_date(order.start_date)
      const db_end_date = convert_yyyymmdd_to_date(order.end_date)
      return end_date >= db_start_date && start_date <= db_end_date
    })
    .map(order => order.hotel_id)
  const enabledHotelList = hotelList
    .filter(hotel => !disabledHotelIdList.includes(hotel.id))
    .filter(hotel => hotel.city === city && hotel.person === person)

  res.send(enabledHotelList)
})

export default HotelRouter
