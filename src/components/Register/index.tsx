import React, { useCallback, useState } from 'react'
import { Form } from 'react-final-form'
import { makeStyles, styled } from '@material-ui/styles'
import { TextField as _TextField, Select as _Select } from 'final-form-material-ui'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText as _DialogContentText,
  DialogTitle,
  FormControlLabel as _FormControlLabel,
  Grid,
  MenuItem as _MenuItem,
} from '@material-ui/core'

import { UsersInfo } from '../../reducers/userInfoList'

export interface DialogProps {
  data: UsersInfo
  enable: boolean
  confirmBtnFuncion: (state: UsersInfo) => void
  onClose: () => void
}

const TextField = styled(_TextField)({
  width: 190,
  '& .MuiInputBase-input': {
    fontSize: 14,
    color: '#4D4F5C',
  },
  '& .MuiOutlinedInput-input': {
    padding: '5px 13px',
  },
})

const DialogContentText = styled(_DialogContentText)({
  color: '#4D4F5C',
  fontSize: 14,
  margin: 0,
})

const FormControlLabel = styled(_FormControlLabel)({
  color: '#4D4F5C',
  '& .MuiTypography-body1': {
    fontSize: 14,
  },
})

const useStyles = makeStyles({
  title: {
    margin: 0,
    padding: 20,
    color: '#fff',
    background: '#43425D',
    fontFamily: 'Source Sans Pro, bold',
  },
  backDrop: {
    background: 'rgba(0,0,0,0.8)',
  },
  confirmbutton: {
    background: '#43425D',
    color: '#fff',
    width: 129,
    height: 30,
    marginRight: 40,
    lineHeight: 0,
    '&:hover': {
      background: '#57566c',
    },
  },
  cancelButton: {
    lineHeight: 0,
    background: '#D0D0DE',
    color: '#43425D',
    width: 129,
    height: 30,
    '&:hover': {
      background: '#dadae1',
    },
  },
})

const MenuItem = styled(_MenuItem)({
  color: '#43425D',
  fontSize: 14,
})

const Select = styled(_Select)({
  color: '#43425D',
  width: 190,
  height: 26,
  textAlign: 'left',
  borderColor: '#43425D',
  fontSize: 14,
})

interface State {
}
export default function Register(props: React.PropsWithChildren<DialogProps>) {
  const { confirmBtnFuncion, data, enable, onClose, children } = props
  const { backDrop, cancelButton: cancelButtonStyle, confirmbutton: confirmButtonStyle, title } = useStyles()


  const onSubmit = () => {
    alert('Submit');
  }

  return (
    <Dialog
      open={enable}
      fullWidth={true}
      maxWidth="md"
      onClose={onClose}
      BackdropProps={{
        classes: {
          root: backDrop,
        },
      }}
    >
      <Form
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle disableTypography={true} id="alert-dialog-title" className={title}>
              {children}
            </DialogTitle>
            <DialogContent style={{ padding: '57px 100px' }}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>

                </Grid>
                <Grid item xs={12} sm={6}>
                  
                </Grid>
              </Grid>
            </DialogContent>
            {submitError && <div className="error">{submitError}</div>}
            <DialogActions style={{ justifyContent: 'center', marginBottom: 20 }}>
              <Button color="primary" className={confirmButtonStyle} type="submit">
                {'confirm'}
              </Button>
              <Button onClick={onClose} color="primary" className={cancelButtonStyle} autoFocus>
                {'cancel'}
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  )
}