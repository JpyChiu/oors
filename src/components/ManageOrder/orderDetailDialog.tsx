import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { Dialog, DialogTitle, Grid } from '@material-ui/core'
import { Reservation } from '../../models/reservation'
import { Hotel } from '../../models/hotel'
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
  const { data, enable, onClose } = props
  const dispatch = useDispatch()
  const { backDrop, title, textLine, button } = useStyles()
  const [userDisplayButton, setUserDisplayButton] = useState(false)
  const [adminDisplayButton, setAdminDisplayButton] = useState(false)
  const [statusText, setStatusText] = useState('')

  const userRole = localStorage.getItem('role')

  useEffect(() => {
    console.log('useEffect')
    switch (data.status) {
      case 'canceled':
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        setStatusText('訂單已取消')
        break
      case 'rejected':
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        setStatusText('訂單被拒絕')
        break
      case 'accepted':
        setUserDisplayButton(true)
        setAdminDisplayButton(false)
        setStatusText('訂單已被接受')
        break
      case 'waiting':
        setUserDisplayButton(true)
        setAdminDisplayButton(true)
        setStatusText('訂單正在等待審核')
        break
      case 'outdate':
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        setStatusText('訂單已結束')
        break
      default:
        setUserDisplayButton(false)
        setAdminDisplayButton(false)
        setStatusText('錯誤')
        break
    }
  }, [data])

  const clickedCancelOrder = () => {
    dispatch(putReservation({ status: 'canceled', reservationId: data.id }))
    onClose()
  }

  const clickedAcceptOrder = () => {
    dispatch(putReservation({ status: 'accepted', reservationId: data.id }))
    onClose()
  }

  const clickedRejectOrder = () => {
    dispatch(putReservation({ status: 'rejected', reservationId: data.id }))
    onClose()
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
    if (userRole === 'admin' && adminDisplayButton) return <AdminButtonSet />
    else if (userRole === 'user' && userDisplayButton) return <UserButtonSet />
    return <div></div>
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
      <DialogTitle className={title}>訂單資訊</DialogTitle>
      <Grid container style={{ marginTop: 20, marginBottom: 50 }} direction="row">
        <Grid item style={{ width: 400, marginLeft: 30 }}>
          <img
            style={{
              margin: 'auto',
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            src={data.hotelThumbnail}
            alt={''}
          />
        </Grid>

        <Grid container direction="column" justify="center" style={{ width: 400, marginLeft: 30 }}>
          <Grid item className={textLine}>
            地點：{data.hotelCity}
          </Grid>
          <Grid item className={textLine}>
            入住日期：{data.startDate}
          </Grid>
          <Grid item className={textLine}>
            退房日期：{data.endDate}
          </Grid>
          <Grid item className={textLine}>
            人數：{data.hotelPerson}
          </Grid>
          <Grid item className={textLine}>
            訂單狀態：{statusText}
          </Grid>
          <Grid item className={textLine}>
            <ButtonComp></ButtonComp>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  )
}
