import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Dialog, DialogContent, DialogTitle, Grid, Typography, IconButton } from '@material-ui/core'
import { Cancel, KeyboardArrowRight } from '@material-ui/icons'

import { Hotel } from '../../models/hotel'
import routes from '../../routes'
import BeforeOrderPopUp from './beforeOrderPopUp'
import WarningPopUp from './warningPopUp'
import responseUtil from '../../utils/responseUtil'
import { RESERVATION_ACTIONS } from '../../epics/reservation/actions'

export interface DialogProps {
  hotelData: Hotel
  enable: boolean
  onClose: () => void
  onOrder: () => void
}

export default function RoomDetailDialog(props: React.PropsWithChildren<DialogProps>) {
  const history = useHistory()
  const { enable, hotelData, onClose, onOrder } = props
  const [beforeOrderPopUpOpen, setBeforeOrderPopUpOpen] = useState(false)
  const [loginWarningOpen, setLoginWarningOpen] = useState(false)
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false)
  const [showFailedPopUp, setShowFailedPopUp] = useState(false)

  useEffect(() => {
    const sub = responseUtil.subscribe(
      {
        successType: [RESERVATION_ACTIONS.POST_RESERVATION_SUCCESS],
        errorType: [RESERVATION_ACTIONS.POST_RESERVATION_FAILED],
      },
      {
        next: () => {
          setShowSuccessPopUp(true)
        },
        error: () => {
          setShowFailedPopUp(true)
        },
      },
    )

    return () => sub.unsubscribe()
  }, [])

  const handleOrderClick = useCallback(() => {
    if (localStorage.getItem('sessionKey') !== null) {
      setBeforeOrderPopUpOpen(true)
    } else {
      setLoginWarningOpen(true)
    }
  }, [])

  const handleBeforeOrderPopUpClose = useCallback(() => {
    setBeforeOrderPopUpOpen(false)
  }, [])

  const handleLoginWarningOpenClose = useCallback(() => {
    setLoginWarningOpen(false)
    history.push(routes.login)
  }, [history])

  const handleOrderSuccessPopUpClose = useCallback(() => {
    setShowSuccessPopUp(false)
    onClose()
    history.push(routes.manageOrder)
  }, [history, onClose])

  const handleOrderFailedPopUpClose = useCallback(() => {
    setShowFailedPopUp(false)
    onClose()
  }, [onClose])

  return (
    <Dialog open={enable} fullWidth maxWidth="md" onClose={onClose}>
      <DialogTitle style={{ padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClose}>
          <Cancel />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ padding: 20 }}>
        <Grid container>
          <Grid item style={{ maxWidth: 500, maxHeight: 500, padding: 20, paddingTop: 0 }}>
            <img
              style={{
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              src={hotelData.pictureSrc}
              alt={hotelData.hotelName}
            />
          </Grid>
          <Grid item direction="column" justify="space-between" sm container style={{ padding: 20, paddingTop: 0 }}>
            <Grid item sm>
              <Grid item container sm>
                <KeyboardArrowRight style={{ color: '#43425D', fontSize: 35 }} />
                <Typography variant="h5">{hotelData.hotelName}</Typography>
              </Grid>
              <Grid item container sm>
                <KeyboardArrowRight style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingTop: 5 }}>Price per day: {hotelData.pricePerDay}</Typography>
              </Grid>
              <Grid item container sm>
                <KeyboardArrowRight style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingTop: 5 }}>
                  房間介紹: <br />
                  {hotelData.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="flex-end">
              <Button variant="contained" onClick={handleOrderClick} style={{ width: 90, height: 40 }}>
                立即訂房
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <BeforeOrderPopUp enable={beforeOrderPopUpOpen} onClose={handleBeforeOrderPopUpClose} onOrder={onOrder} />
      <WarningPopUp enable={loginWarningOpen} message={'請先登入！'} onClose={handleLoginWarningOpenClose} />
      <WarningPopUp enable={showSuccessPopUp} message={'訂房成功!'} onClose={handleOrderSuccessPopUpClose} />
      <WarningPopUp
        enable={showFailedPopUp}
        message={'OOPS! 哪裡出問題了,請再試一次!'}
        onClose={handleOrderFailedPopUpClose}
      />
    </Dialog>
  )
}
