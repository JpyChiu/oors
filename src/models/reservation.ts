export interface IncomingReservation {
  id: string
  hotel_info: { person: number; city: string; thumbnail: string }
  hotel_id: string
  tenant_id: string
  tenant_name: string
  start_date: string
  end_date: string
  price: number
  is_paid: boolean
  status: string
}

export interface Reservation {
  id: string
  hotelId: string
  hotelPerson: number
  hotelCity: string
  hotelThumbnail: string
  tenantId: string
  tenantName: string
  startDate: string
  endDate: string
  price: number
  isPaid: boolean
  status: string
}

export interface ReservationPostReqBody {
  hotelId: string
  startDate: string
  endDate: string
  price: number
}
