import React from 'react'
import { Redirect, Switch, Route, useLocation } from 'react-router-dom'
import Header from '../Header'
import routes from '../routes'
import FindRoom from '../FindRoom'

function HomeControl() {
  const location = useLocation()
  const isLoginPage = location.pathname.endsWith('/login')

  return (
    <>
      {!isLoginPage && <Header />}
      <Switch>
        <Route exact path={routes.home} component={FindRoom} />
        {/* <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.changeUserInfo} component={ChangeUserInfo} />
        <Route exact path={routes.enabledRoomPage} component={EnabledRoomPage} />
        <Route exact path={manageOrder} component={ManageOrder} /> */}
        <Redirect to={routes.login} />
      </Switch>
    </>
  )
}

export default HomeControl