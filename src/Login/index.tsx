import React, { useCallback, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { makeStyles, styled } from '@material-ui/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import { TextField } from 'final-form-material-ui'

import logo from './logo.jpg'

import { UsersInfo } from '../reducers/userInfoList'
import Register from '../components/Register/index'

interface LoginProps {
  onLogin: (email: string, password: string) => void
  onRegister: (request: UsersInfo) => void
  status: string
}

interface LoginInfoValues {
  email: string | null
  password: string
  remember: boolean
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

const RegisterButton = styled(Button)({
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

function Login(props: LoginProps) {
  const { status, onLogin: postLogin, onRegister: registerUser } = props
  const [loginError, setLoginError] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()
  const initUserInfo: UsersInfo = {
    account: '',
    name: '',
    email: '',
    password: '',
    phone: 9,
  }

  const isLoginError = useCallback(() => {
    status && status !== '' ? setLoginError(true) : setLoginError(false)
  }, [status])

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const onSubmit = () => {
    alert('Submit');
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Happy Birthday</Typography>
      <div style={{alignItems: 'center'}}>
        <img src={logo} className="App-logo"/>
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
                  type="text"
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
                <RegisterButton variant="outlined" onClick={handleDialogOpen}>
                  註冊
                  <Register
                    data={initUserInfo}
                    enable={dialogOpen}
                    onClose={handleDialogClose}
                    confirmBtnFuncion={registerUser}
                  >
                    註冊
                  </Register>
                </RegisterButton>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  )
}

export default Login
