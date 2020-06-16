export const LOGIN_ACTIONS = {
    POST_LOGIN: '@LOGIN/POST_LOGIN',
    POST_LOGIN_SUCCESS: '@LOGIN/POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILED: '@LOGIN/POST_LOGIN_FAILED',
}

export const postLogin = (email: string, password: string) => ({
    type: LOGIN_ACTIONS.POST_LOGIN,
    payload: {
      email,
      password,
    },
})

export const postLoginSuccess = (data: any) => ({
    type: LOGIN_ACTIONS.POST_LOGIN_SUCCESS,
    payload: data,
})

export const postLoginFailed = () => ({
    type: LOGIN_ACTIONS.POST_LOGIN_FAILED,
})
