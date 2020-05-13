import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core'

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
    history.push('/login')
  }, [history])

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h5">OORS</Typography>
        <Button variant="outlined" color="inherit" onClick={handleLoginClick}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
