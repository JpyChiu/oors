import uuid from 'uuid/v4'
import { OrderQueue } from '../model'

export const orderQueue: OrderQueue[] = [
  {
    id: 'test_id',
    hotel_id: 'room_00001',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: true,
    status: 'waiting',
  },
  {
    id: uuid(),
    hotel_id: 'room_00001',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200514',
    end_date: '20200515',
    price: 1000,
    is_paid: true,
    status: 'waiting',
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200610',
    end_date: '20200611',
    price: 1000,
    is_paid: true,
    status: 'accepted',
  },
  {
    id: uuid(),
    hotel_id: 'room_00001',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200410',
    end_date: '20200411',
    price: 1000,
    is_paid: true,
    status: 'outdate',
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: false,
    status: 'canceled',
  },
  {
    id: uuid(),
    hotel_id: 'room_00002',
    hotel_info: { city: 'taipei', person: 2, thumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg' },
    tenant_id: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
    tenant_name: 'Adin',
    start_date: '20200510',
    end_date: '20200511',
    price: 1000,
    is_paid: false,
    status: 'rejected',
  },
]
