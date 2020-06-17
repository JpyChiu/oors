import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export interface DialogProps {
  enable: boolean
  message: string
  onClose: () => void
}

export default function WarningPopUp(props: React.PropsWithChildren<DialogProps>) {
  const { enable, onClose, message } = props

  return (
    <Dialog fullWidth={true} open={enable} onClose={onClose}>
      <DialogTitle id="alert-dialog-title" />
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{`${message}`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
