import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, Typography, IconButton } from '@material-ui/core'
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
              <Button variant="contained" onClick={onOrder} style={{ width: 90, height: 40 }}>
                立即訂房
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
