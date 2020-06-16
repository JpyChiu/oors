import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { makeStyles, styled } from '@material-ui/styles'
import { Button, Grid, Link, Typography } from '@material-ui/core'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import { TextField } from 'final-form-material-ui'

import logo from './logo.jpg'

import { UsersInfo } from '../reducers/userInfoList'
import { StoreState } from '../reducers/rootReducer'
import { postLogin } from '../epics/login/action'
import { registerUser } from '../epics/register/action'
import Register from '../components/Register/index'
import routes from '../routes'

interface LoginInfoValues {
  email: string | null
  password: string
}

const LoginButton = styled(Button)({
  width: 50,
  height: 50,
  textAlign: 'center',
  marginLeft: 30,
  marginTop: 30,
  '&:hover': {
    backgroundColor: '#2E3B55',
    color: '#ffffff',
  },
})

const RegisterLink = styled(Link)({
  textAlign: 'center',
  marginLeft: 30,
  marginTop: 45,
  '&:hover': {
    backgroundColor: '#2E3B55',
    color: '#ffffff',
  },
})

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    paddingTop: '23vh',
    paddingBottom: '35vh',
  },
  inputField: {
    '& .MuiInputBase-input': {
      color: '#43425D',
    },
    width: 400,
  },
  title: {
    paddingBottom: '5vh',
    fontFamily: 'Source Sans Pro',
    color: '#43425D',
    fontWeight: 1000,
    fontSize: 50,
    letterSpacing: 10,
  },
  errorMessage: {
    fontWeight: 600,
    letterSpacing: 1,
    padding: '20px 0px',
    color: '#ef7471',
  },
})

export default function Login() {
  const dispatch = useDispatch()
  const status = useSelector((state: StoreState) => state.login.status)
  const [loginError, setLoginError] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const initUserInfo: UsersInfo = {
    account: '',
    name: '',
    email: '',
    password: '',
    phone: 9,
  }

  const handleLogoClick = useCallback(() => {
    history.push(routes.home)
  }, [history])

  const onLogin = useCallback(
    (email: string, password: string) => {
      dispatch(postLogin(email, password))
    }, 
    [dispatch],
  )

  const onRegister = useCallback(
    (userInfo: UsersInfo) => {
      dispatch(registerUser(userInfo))
    },
    [dispatch],
  )

  const isLoginError = useCallback(() => {
    status && status !== '' ? setLoginError(true) : setLoginError(false)
  }, [status])

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const onSubmit = useCallback(
    (values: LoginInfoValues) => {
      const { email, password } = values
      if (email && password) {
        onLogin(email, password)
      }
    },
    [onLogin]
  )

  return (
    <div className={classes.root}>
      <Button onClick={handleLogoClick} color="inherit">
        <Typography className={classes.title}>Happy Birthday</Typography>
      </Button>
      <div style={{alignItems: 'center'}}>
        <img src={logo} className="App-logo" alt=""/>
      </div>
      <Form 
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                <MailOutlineRoundedIcon style={{ color: '#43425D', paddingTop: 25, fontSize: 25 }} />
              </Grid>
              <Grid item>
                <Field
                  className={classes.inputField}
                  required
                  name="email"
                  component={TextField}
                  type="email"
                  label={"email"}
                  defaultValue={localStorage.getItem('email')}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item>
                <SettingsRoundedIcon style={{ color: '#43425D', paddingTop: 25, fontSize: 25 }} />
              </Grid>
              <Grid item>
                <Field
                  className={classes.inputField}
                  required
                  name="password"
                  component={TextField}
                  type="password"
                  label={"password"}
                />
              </Grid>
            </Grid>
            {submitError && <div className="error">{submitError}</div>}
            {isLoginError()}
            {loginError && <Grid className={classes.errorMessage}>帳號或密碼錯誤</Grid>}
            <Grid container>
              <Grid item container justify="flex-end" xs={6}>
                <LoginButton variant="outlined" type="submit" disabled={submitting}>
                  登入
                </LoginButton>
              </Grid>
              <Grid item container justify="flex-start" xs={6}>
                <RegisterLink onClick={handleDialogOpen}>註冊</RegisterLink>
                  <Register
                    data={initUserInfo}
                    enable={dialogOpen}
                    onClose={handleDialogClose}
                    confirmBtnFuncion={onRegister}
                  >
                    註冊
                  </Register>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  )
}
