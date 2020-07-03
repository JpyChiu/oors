import { Hotel } from '@src/models/hotel'

export const HOTEL_ACTIONS = {
  GET_CITIES_AND_PERSON: '@HOTEL/GET_CITIES_AND_PERSON',
  GET_CITIES_AND_PERSON_SUCCESS: '@HOTEL/GET_CITIES_AND_PERSON_SUCCESS',
  GET_CITIES_AND_PERSON_FAILED: '@HOTEL/GET_CITIES_AND_PERSON_FAILED',
  GET_ENABLED_HOTEL_LIST: '@HOTEL/GET_ENABLED_LIST',
  GET_ENABLED_HOTEL_LIST_SUCCESS: '@HOTEL/GET_ENABLED_LIST_SUCCESS',
  GET_ENABLED_HOTEL_LIST_FAILED: '@HOTEL/GET_ENABLED_LIST_FAILED',
}

export const getCitiesAndPerson = () => ({
  type: HOTEL_ACTIONS.GET_CITIES_AND_PERSON,
})

export const getCitiesAndPersonSuccess = (payload: Hotel[]) => ({
  type: HOTEL_ACTIONS.GET_CITIES_AND_PERSON_SUCCESS,
  payload,
})

export const getCitiesAndPersonFailed = () => ({
  type: HOTEL_ACTIONS.GET_CITIES_AND_PERSON_FAILED,
})

export const getEnabledHotels = (payload: { startDate: string; endDate: string; city: string; person: number }) => ({
  type: HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST,
  payload,
})

export const getEnabledHotelsSuccess = (payload: Hotel[]) => ({
  type: HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_SUCCESS,
  payload,
})

export const getEnabledHotelsFailed = () => ({
  type: HOTEL_ACTIONS.GET_ENABLED_HOTEL_LIST_FAILED,
})
