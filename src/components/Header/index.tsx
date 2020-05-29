import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppsSharpIcon from '@material-ui/icons/AppsSharp'
import FormatIndentDecreaseSharpIcon from '@material-ui/icons/FormatIndentDecreaseSharp'
import FormatIndentIncreaseSharpIcon from '@material-ui/icons/FormatIndentIncreaseSharp'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import routes from '../../routes'

const useStyles = makeStyles({
  root: {
    background: '#2E3B55',
    justifyContent: 'space-between',
  },
})

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

function Header() {
  const classes = useStyles()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleAnchorElClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAnchorElClose = () => {
    setAnchorEl(null)
  }

  const handleLoginClick = useCallback(() => {
    history.push(routes.login)
  }, [history])

  const handleLogoutClick = useCallback(() => {
    // TODO: clear user session
    history.push(routes.home)
  }, [history])

  const handleLogoClick = useCallback(() => {
    history.push(routes.home)
  }, [history])

  const handleManageClick = useCallback(() => {
    // TODO: clear user session
    history.push(routes.manageOrder)
  }, [history])

  // TODO: only render Login button or Logout button
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button onClick={handleLogoClick} color="inherit">
          <Typography variant="h5">OORS</Typography>
        </Button>
        <div>
          <div>
            <IconButton color="inherit" aria-label="open menu" onClick={handleAnchorElClick} edge="start">
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleAnchorElClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="User Manage" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleManageClick}>
                <ListItemIcon>
                  <AppsSharpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Manage order" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleLoginClick}>
                <ListItemIcon>
                  <FormatIndentIncreaseSharpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleLogoutClick}>
                <ListItemIcon>
                  <FormatIndentDecreaseSharpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
