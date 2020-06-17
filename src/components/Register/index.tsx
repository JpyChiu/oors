import React, { useState, useCallback, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { makeStyles, styled } from '@material-ui/styles'
import { TextField as _TextField } from 'final-form-material-ui'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText as _DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core'

import { UsersForm } from '../../models/user'
import responseUtil from '../../utils/responseUtil'
import { REGISTER_ACTIONS } from '../../epics/register/action'

enum userContent {
  checkPasswordStr = '確認密碼',
  emailStr = 'Email',
  nameStr = '姓名',
  passwordStr = '密碼',
  phoneStr = '手機號碼',
}

interface userFormWithCheckPass extends UsersForm {
  checkPassword: string
}

export interface DialogProps {
  data: UsersForm
  enable: boolean
  confirmBtnFuncion: (state: UsersForm) => void
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

export default function Register(props: React.PropsWithChildren<DialogProps>) {
  const { confirmBtnFuncion, enable, onClose, children } = props
  const { backDrop, cancelButton: cancelButtonStyle, registerButton: registerButtonStyle, title } = useStyles()
  const [popUpOpen, setPopUpOpen] = useState(false)
  const {
    checkPasswordStr,
    emailStr,
    nameStr,
    passwordStr,
    phoneStr,
  } = userContent

  const handlePopUpClose = useCallback(() => {
    setPopUpOpen(false)
    onClose()
  }, [onClose])

  const labelAndTextInput = (
    key:
      | typeof checkPasswordStr
      | typeof emailStr
      | typeof nameStr
      | typeof passwordStr,
    name: 'checkPassword' | 'email' | 'name' | 'password',
    type: 'email' | 'text' | 'password',
  ) => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ marginBottom: 20 }}>
        {renderLabel(snakeToCamel(key))}
        <Grid item sm={7}>
          <Field
            required
            name={name}
            component={TextField as React.FC}
            type={type}
            variant="outlined"
          />
        </Grid>
      </Grid>
    )
  }

  const normalizePhone = (value: string) => {
    if (!value) {
      return value
    }
    return value.replace(/[^\d]/g, '')
  }

  const labelAndPhoneInput = (
    key:
      | typeof phoneStr,
    name: 'phone',
  ) => {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="center" style={{ marginBottom: 20 }}>
        {renderLabel(snakeToCamel(key))}
        <Grid item sm={7}>
          <Field
            required
            name={name}
            component={TextField as React.FC}
            type="text"
            parse={normalizePhone}
            variant="outlined"
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

  useEffect(() => {
    const sub = responseUtil.subscribe(
      {
        successType: [REGISTER_ACTIONS.REGISTER_USER_SUCCESS],
        errorType: [REGISTER_ACTIONS.REGISTER_USER_FAILURE],
      },
      {
        next: () => {
          setPopUpOpen(true)
        },
      }
    )

    return () => sub.unsubscribe()
  }, [])

  const snakeToCamel = (str: string) =>
    str.replace(/([_][a-z])/g, (group: string) => group.toUpperCase().replace('_', ''))

  const onSubmit = useCallback(
    (value: userFormWithCheckPass) => {
      if(value.password != value.checkPassword){
        return { checkPassword: '與密碼不一致' }
      }
      else
        confirmBtnFuncion(value)
    },
    [confirmBtnFuncion],
  )

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
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                  {labelAndTextInput(nameStr, 'name', 'text')}
                  {labelAndPhoneInput(phoneStr, 'phone')}
                  {labelAndTextInput(emailStr, 'email', 'email')}
                  {labelAndTextInput(passwordStr, 'password', 'password')}
                  {labelAndTextInput(checkPasswordStr, 'checkPassword', 'password')}
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
      <Dialog 
        fullWidth={true}
        open={popUpOpen} 
        onClose={handlePopUpClose}>
        <DialogTitle id="alert-dialog-title"/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            註冊成功！
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopUpClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  )
}