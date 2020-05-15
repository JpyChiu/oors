import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core'
import routes from '../../routes'

const useStyles = makeStyles({
  root: {
    background: '#2E3B55',
    justifyContent: 'space-between',
  },
})

function Header() {
  const classes = useStyles()
  const history = useHistory()

  const handleLoginClick = useCallback(() => {
    history.push(routes.login)
  }, [history])

  const handleLogoutClick = useCallback(() => {
    // TODO: clear user session
    history.push(routes.home)
  }, [history])

  // TODO: only render Login button or Logout button
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h5">OORS</Typography>
        <div>
          <Button variant="outlined" color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
          <Button variant="outlined" color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
