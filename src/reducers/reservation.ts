import { AnyAction } from 'redux'
import { RESERVATION_ACTIONS } from '../epics/reservation/actions'
import { Reservation } from '../models/reservation'

export interface ReservationState {
  userReservationList: Reservation[]
}

// Fake Data
const initState: ReservationState = {
  userReservationList: [
    {
      id: 'test_id1',
      hotelId: 'room_00001',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200510',
      endDate: '20200511',
      price: 1000,
      isPaid: true,
      status: 'live',
    },
    {
      id: 'test_id2',
      hotelId: 'room_00001',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200514',
      endDate: '20200515',
      price: 1000,
      isPaid: true,
      status: 'live',
    },
    {
      id: 'test_id3',
      hotelId: 'room_00002',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200610',
      endDate: '20200611',
      price: 1000,
      isPaid: true,
      status: 'live',
    },
    {
      id: 'test_id4',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelId: 'room_00001',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200410',
      endDate: '20200411',
      price: 1000,
      isPaid: true,
      status: 'outdate',
    },
    {
      id: 'test_id5',
      hotelId: 'room_00002',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200510',
      endDate: '20200511',
      price: 1000,
      isPaid: false,
      status: 'canceled',
    },
    {
      id: 'test_id6',
      hotelId: 'room_00002',
      hotelPerson: 2,
      hotelCity: 'Taipei',
      hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
      tenantId: 'f5e10cd8-cec6-4e4c-bd8d-074e3bb68cd3',
      tenantName: 'Adin',
      startDate: '20200510',
      endDate: '20200511',
      price: 1000,
      isPaid: false,
      status: 'reject',
    },
  ],
}

export default function hotelReducer(state: ReservationState = initState, action: AnyAction) {
  switch (action.type) {
    case RESERVATION_ACTIONS.POST_RESERVATION_SUCCESS:
      return { ...state, userReservationList: { ...action.payload } }
    case RESERVATION_ACTIONS.GET_USER_RESERVATION_SUCCESS:
      return { ...state, userReservationList: action.payload }
    case RESERVATION_ACTIONS.PUT_RESERVATION_SUCCESS:
      return {
        ...state,
        userReservationList: state.userReservationList.map((reservation: Reservation) =>
          reservation.id === action.payload.id ? action.payload : reservation,
        ),
      }
    case RESERVATION_ACTIONS.POST_RESERVATION_FAILED:
    case RESERVATION_ACTIONS.GET_USER_RESERVATION_FAILED:
    case RESERVATION_ACTIONS.PUT_RESERVATION_FAILED:
    default:
      return state
  }
}
