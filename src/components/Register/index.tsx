import React, { useCallback, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { makeStyles, styled } from '@material-ui/styles'
import { TextField as _TextField, Select as _Select } from 'final-form-material-ui'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText as _DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core'

import { UsersInfo } from '../../reducers/userInfoList'

enum userContent {
  accountStr = 'account',
  emailStr = 'email',
  nameStr = 'name',
  passwordStr = 'password',
  phoneStr = 'phone',
}

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
  registerButton: {
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

interface State {
}
export default function Register(props: React.PropsWithChildren<DialogProps>) {
  const { confirmBtnFuncion, data, enable, onClose, children } = props
  const { backDrop, cancelButton: cancelButtonStyle, registerButton: registerButtonStyle, title } = useStyles()
  const [userInfo] = useState<UsersInfo>(data)
  const {
    accountStr,
    emailStr,
    nameStr,
    passwordStr,
    phoneStr,
  } = userContent

  const {
    account,
    email,
    name,
    phone,
  } = userInfo

  const labelAndTextInput = (
    key:
      | typeof accountStr
      | typeof nameStr
      | typeof emailStr
      | typeof passwordStr
      | typeof phoneStr,
    defaultValue: string | number,
    type: 'email' | 'text' | 'number' | 'password',
  ) => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ marginBottom: 20 }}>
        {renderLabel(snakeToCamel(key))}
        <Grid item sm={7}>
          <Field
            required
            name={key}
            component={TextField as React.FC}
            type={type}
            variant="outlined"
            defaultValue={defaultValue}
          />
        </Grid>
      </Grid>
    )
  }

  const renderLabel = (key: string) => {
    return (
      <Grid item sm={5}>
        <DialogContentText>{key}</DialogContentText>
      </Grid>
    )
  }

  const snakeToCamel = (str: string) =>
    str.replace(/([_][a-z])/g, (group: string) => group.toUpperCase().replace('_', ''))

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
                  {labelAndTextInput(nameStr, name, 'text')}
                  {labelAndTextInput(phoneStr, '', 'number')}
                  {labelAndTextInput(emailStr, email, 'email')}
                  {labelAndTextInput(accountStr, account, 'text')}
                  {labelAndTextInput(passwordStr, '', 'password')}
                </Grid>
              </Grid>
            </DialogContent>
            {submitError && <div className="error">{submitError}</div>}
            <DialogActions style={{ justifyContent: 'center', marginBottom: 20 }}>
              <Button color="primary" className={registerButtonStyle} type="submit">
                {'register'}
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