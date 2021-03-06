export interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  session: string
  role: 'user' | 'admin'
}

export interface Hotel {
  id: string
  hotel_name: string
  city: string
  price_per_day: number
  person: number
  description: string
  picture_src: string
}

export interface OrderQueue {
  id: string
  hotel_id: string
  hotel_info: { person: number; city: string; thumbnail: string }
  tenant_id: string
  tenant_name: string
  start_date: string
  end_date: string
  price: number
  is_paid: boolean
  status: 'waiting' | 'accepted' | 'outdate' | 'rejected' | 'canceled'
}
