export const USER_INFO_LIST_ACTIONS = {
  GET_USERS_INFO_LIST: '@USER_INFO_LIST/GET_USERS_INFO_LIST',
  GET_USERS_INFO_LIST_SUCCESS: '@USER_INFO_LIST/GET_USERS_INFO_LIST_SUCCESS',
  GET_USERS_INFO_LIST_FAILURE: '@USER_INFO_LIST/GET_USERS_INFO_LIST_FAILURE',
}

export const getUsersInfoList = (query: string[]) => ({
  type: USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST,
  payload: query,
})

export const getUsersInfoListSuccess = (data: any) => ({
  type: USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST_SUCCESS,
  payload: data,
})

export const getUsersInfoListFailure = (data: any) => ({
  type: USER_INFO_LIST_ACTIONS.GET_USERS_INFO_LIST_FAILURE,
  payload: data,
})
