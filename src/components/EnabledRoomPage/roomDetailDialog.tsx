import React from 'react'
import { Dialog, DialogContent, Grid, Typography } from '@material-ui/core'

import { Hotel } from '../../models/hotel'

export interface DialogProps {
  hotelData: Hotel
  enable: boolean
  onClose: () => void
}

export default function RoomDetailDialog(props: React.PropsWithChildren<DialogProps>) {
  const { enable, hotelData, onClose } = props
  return (
    <Dialog open={enable} fullWidth maxWidth="md" onClose={onClose}>
      <DialogContent style={{ padding: 50 }}>
        <Grid container>
          <Grid item style={{ maxWidth: 500, maxHeight: 500 }}>
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
          <Grid item>
            <Typography variant="subtitle1">{hotelData.hotelName}</Typography>
            <Typography>Price per day: {hotelData.pricePerDay}</Typography>
            <Typography>{hotelData.description}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
