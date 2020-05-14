export interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  session: string
  role: string
}

export interface Hotel {
  id: string
  hotel_name: string
  price_per_day: number
  person: number
  description: string
}

export interface OrderQueue {
  id: string
  hotel_id: string
  tenant_id: string
  start_date: string
  end_date: string
  price: number
  is_paid: boolean
  status: string
}
