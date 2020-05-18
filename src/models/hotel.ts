export interface Hotel {
  id: string
  hotelName: string
  city: string
  pricePerDay: number
  person: number
  description: string
  pictureSrc: string
}

export interface IncomingHotel {
  id: string
  hotel_name: string
  city: string
  price_per_day: number
  person: number
  description: string
  picture_src: string
}
