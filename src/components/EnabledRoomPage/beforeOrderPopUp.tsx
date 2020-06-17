import React, { useCallback } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  orderBtn: {
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
  },
}))

export interface DialogProps {
  enable: boolean
  onClose: () => void
  onOrder: () => void
}

export default function BeforeOrderPopUp(props: React.PropsWithChildren<DialogProps>) {
  const classes = useStyles()
  const { enable, onClose, onOrder } = props

  const handleOrderButton = useCallback(() => {
    onClose()
    onOrder()
  }, [onClose, onOrder])

  return (
    <Dialog open={enable} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{'確定訂購這間嗎?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          使用者訂房前請先確認相關注意事項, 訂房後可在入住一星期前取消訂單
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          取消
        </Button>
        <Button className={classes.orderBtn} onClick={handleOrderButton} color="primary" autoFocus>
          訂房
        </Button>
      </DialogActions>
    </Dialog>
  )
}
