import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
  Typography,
} from '@material-ui/core'
import { Reservation } from '../../models/reservation'
import { Hotel } from '../../models/hotel'
import { UsersInfo } from '../../reducers/userInfoList'
import { putReservation } from '../../epics/reservation/actions'

export interface DialogProps {
  data: Reservation
  enable: boolean
  onClose: () => void
}

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
  textLine: {
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    lineHeight: 0,
    background: '#D0D0DE',
    color: '#43425D',
    width: 100,
    height: 30,
    margin: 10,
    '&:hover': {
      background: '#dadae1',
    },
  },
})

export default function DisplayOrderInfo(props: React.PropsWithChildren<DialogProps>) {
  const { data, enable, onClose, children } = props
  const dispatch = useDispatch()
  const { backDrop, title, textLine, button } = useStyles()
  const [orderInfo] = useState<Reservation>(data)
  const [userDisplayButton, setUserDisplayButton] = useState(false)
  const [adminDisplayButton, setAdminDisplayButton] = useState(false)
  var statusText = ''

  const [targetHotel, setTargetHotel] = useState<Hotel>({
    id: 'dummyId',
    hotelName: 'dummyHotelName',
    city: 'dummyCity',
    pricePerDay: 0,
    person: 0,
    description: '',
    pictureSrc: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
  })

  const [targetUser, setTargetUser] = useState<UsersInfo>({
    account: 'dummyAccount',
    name: 'dummyUserName',
    email: 'dummyEmail',
    password: 'dummyPassword',
    phone: 9,
  })

  useEffect(() => {
    switch (data.status) {
      case 'canceled':
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        statusText = '訂單已取消'
        break
      case 'rejected':
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        statusText = '訂單被拒絕'
        break
      case 'accepted':
        setUserDisplayButton(true)
        setAdminDisplayButton(false)
        statusText = '訂單已被接受'
        break
      case 'waiting':
        setUserDisplayButton(true)
        setAdminDisplayButton(true)
        statusText = '訂單正在等待審核'
        break
      case 'outdate':
          setUserDisplayButton(true)
          setAdminDisplayButton(true)
          statusText = '訂單已結束'
          break
      default:
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        statusText = '錯誤'
        break
    }
  }, [data.status])

  
  const clickedCancelOrder = () => {
  }

  const clickedAcceptOrder = () => {}

  const clickedRejectOrder = () => {
    console.log('abc')
    dispatch(putReservation({ status: 'canceled', reservationId: orderInfo.id }))
  }

  const UserButtonSet = () => {
    return (
      <div>
        <button onClick={clickedCancelOrder} className={button}>
          取消訂單
        </button>
      </div>
    )
  }

  const AdminButtonSet = () => {
    return (
      <div>
        <button onClick={clickedAcceptOrder} className={button}>
          接受
        </button>
        <button onClick={clickedRejectOrder} className={button}>
          拒絕
        </button>
      </div>
    )
  }

  const ButtonComp = () => {
    if (true && adminDisplayButton) return <AdminButtonSet />
    else if (false && userDisplayButton) return <UserButtonSet />
    return <div></div>
  }

  const StatusDisplay = () => {
    return <div>{statusText}</div>
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
      <DialogTitle className={title}>{targetHotel.hotelName}</DialogTitle>
      <Grid container style={{ marginTop: 20, marginBottom: 50 }} direction="row">
        <Grid item style={{ width: 400, marginLeft: 30 }}>
          <img
            style={{
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            src={targetHotel.pictureSrc}
            alt={targetHotel.hotelName}
          />
        </Grid>

        <Grid container direction="column" justify="center" style={{ width: 400, marginLeft: 30 }}>
          <Grid item className={textLine}>
            地點：{targetHotel.city}
          </Grid>
          <Grid item className={textLine}>
            入住日期：{orderInfo.startDate}
          </Grid>
          <Grid item className={textLine}>
            退房日期：{orderInfo.endDate}
          </Grid>
          <Grid item className={textLine}>
            人數：{targetHotel.person}
          </Grid>
          <Grid item className={textLine}>
            訂單狀態：<StatusDisplay></StatusDisplay>
          </Grid>
          <Grid item className={textLine}>
            <ButtonComp></ButtonComp>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  )
}