import uuid from 'uuid/v4'

export const orderQueue = [
  {
    id: uuid(),
    hotel_id: 'room_00001',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: true,
  },
  {
    id: uuid(),
    hotel_id: 'room_00001',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200514',
    end_date: '20200515',
    price: 1000,
    is_paid: true,
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: true,
  },
]
