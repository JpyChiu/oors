import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from '@material-ui/styles'
import { Button, Grid } from '@material-ui/core'
import logo from './logo.jpg'

function Login() {
  const history = useHistory()
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleRegisterClick = useCallback(() => {
    history.push('/register')
  }, [history])

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  
  const handleDialogClose = () => {
    setDialogOpen(false)
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

  return (
    <div className="Login">
      <div style={{alignItems: 'center'}}>
        <img src={logo} className="App-logo"/>
      </div>
      <form>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p>帳號</p>
          <input type="text" name="account"></input>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <p>密碼</p>
          <input type="text" name="password"></input>
        </div>
        <Button type="submit" value="submit">登入</Button>
        <Grid  container spacing={2} justify="center" alignItems="center" style={{ marginTop: 80 }} >
          <LoginButton>
            登入
          </LoginButton>
        </Grid>
        <Grid  container spacing={2} justify="center" alignItems="center" style={{ marginTop: 80 }}>
          <RegisterButton variant="outlined" onClick={handleDialogOpen}>
            註冊
          </RegisterButton>
        </Grid>
      </form>
    </div>
  )
}

export default Login
