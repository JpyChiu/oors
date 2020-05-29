import React, { useState, useCallback } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Cancel, KeyboardArrowRight } from '@material-ui/icons'

import { Hotel } from '../../models/hotel'

export interface DialogProps {
  hotelData: Hotel
  enable: boolean
  onClose: () => void
  onOrder: () => void
}

export default function RoomDetailDialog(props: React.PropsWithChildren<DialogProps>) {
  const { enable, hotelData, onClose, onOrder } = props
  const [popUpOpen, setPopUpOpen] = useState(false)

  const handleOrderClick = useCallback(() => {
    setPopUpOpen(true)
  }, [])

  const handlePopUpCancel = useCallback(() => {
    setPopUpOpen(false)
  }, [])

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
      <Dialog open={popUpOpen} onClose={handlePopUpCancel}>
        <DialogTitle id="alert-dialog-title">{'確定訂購這間嗎?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            使用者訂房前請先確認相關注意事項, 訂房後可在入住一星期前取消訂單
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopUpCancel} color="primary">
            取消
          </Button>
          <Button onClick={onOrder} color="primary" autoFocus>
            訂房
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  )
}
