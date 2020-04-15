import express from 'express'

export const hotels = [
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

// TODO: find enabled room
// HotelRouter.get('/find', function(req, res) {
//   res.send(hotels)
// })

export default HotelRouter
