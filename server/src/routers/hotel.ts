import express from 'express'
import { orderQueue } from '../fakeData/orderQueue'
import { hotelList } from '../fakeData/hotel'
import { convert_yyyymmdd_to_date } from '../util'

const HotelRouter = express.Router()

// Retrieve all hotels
HotelRouter.get('/', (req, res) => {
  res.send(hotelList)
})

HotelRouter.get('/count', (req, res) => {
  const hotel_props = {
    cities: hotelList
      .filter((hotel, index: number, self) => {
        return index === self.findIndex(t => t.city === hotel.city)
      })
      .map(hotel => hotel.city),
    person: hotelList
      .filter((hotel, index: number, self) => {
        return index === self.findIndex(t => t.person === hotel.person)
      })
      .map(hotel => hotel.person)
      .sort((person_a, person_b) => {
        return person_a - person_b
      }),
  }
  res.send(hotel_props)
})

// find enabled room
HotelRouter.get('/find', (req, res) => {
  const city = req.query.city
  const person = parseInt(req.query.person)
  const start_date = convert_yyyymmdd_to_date(req.query.startDate)
  const end_date = convert_yyyymmdd_to_date(req.query.endDate)
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
