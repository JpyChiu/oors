export interface IncomingReservation {
  id: string
  hotel_id: string
  tenant_id: string
  start_date: string
  end_date: string
  price: number
  is_paid: boolean
  status: string
}

export interface Reservation {
  id: string
  hotelId: string
  tenantId: string
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
