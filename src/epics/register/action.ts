import { UsersInfo } from '../../reducers/userInfoList'

export const REGISTER_ACTIONS = {
    REGISTER_USER: '@LOGIN/REGISTER_USER',
    REGISTER_USER_SUCCESS: '@LOGIN/REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: '@LOGIN/REGISTER_USER_FAILURE',
}

export const registerUser = (req: UsersInfo) => ({
  type: REGISTER_ACTIONS.REGISTER_USER,
  payload: req,
})

export const registerUserSuccess = (data: UsersInfo) => ({
  type: REGISTER_ACTIONS.REGISTER_USER_SUCCESS,
  payload: data,
})

export const registerUserFailure = (data: any) => ({
  type: REGISTER_ACTIONS.REGISTER_USER_FAILURE,
  payload: data,
})
