import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core'

import DisplayOrderInfo from '../ManageOrder/orderDetailDialog'
import { StoreState } from '@src/reducers/rootReducer'
import { Reservation } from '@src/models/reservation'
import { yyyymmddToDashYyyymmdd } from '@src/utils/dateConvert'
import { getUserReservation } from '@src/epics/reservation/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor: 'gray',
    },
    item: {
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    inline: {
      display: 'inline',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    paper: {},
  }),
)

export default function ManageOrder() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { userReservationList } = useSelector((storeState: StoreState) => ({
    userReservationList: storeState.reservation.userReservationList,
  }))
  const [dialogOpen, setDialogOpen] = useState(false)
  const [targetReservation, setTargetReservation] = useState<Reservation>({
    id: 'dummyId',
    hotelId: 'dummyHotelId',
    hotelCity: 'dummyCity',
    hotelPerson: 1,
    hotelThumbnail: 'https://s.newtalk.tw/album/news/381/5e7aeace5583c.jpg',
    tenantId: 'dummyTenantId',
    tenantName: 'Adin',
    startDate: '2020/01/01',
    endDate: '2020/01/01',
    price: 1000,
    isPaid: false,
    status: 'waiting',
  })

  useEffect(() => {
    dispatch(getUserReservation())
  }, [dispatch])

  const handleDialogOpen = useCallback(
    (index: number) => {
      setTargetReservation(userReservationList[index])
      setDialogOpen(true)
    },
    [userReservationList],
  )

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false)
    dispatch(getUserReservation())
  }, [dispatch])

  return (
    <Grid container justify="center" style={{ margin: 10 }}>
      <Grid item>
        <Typography color="textPrimary" variant="h4">
          訂單管理
        </Typography>
      </Grid>
      <Grid item container></Grid>
      <Grid container spacing={2} justify="center">
        {userReservationList &&
          userReservationList.map((orderItem, i) => (
            <Grid item xs={8} sm={8} md={8} lg={8} key={i} data-reservation-id={orderItem.id}>
              <Paper className={classes.paper} elevation={3}>
                <ButtonBase
                  style={{
                    minWidth: 400,
                    width: '100%',
                    height: 150,
                    padding: 10,
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                  onClick={() => handleDialogOpen(i)}
                >
                  <img
                    style={{
                      paddingRight: 20,
                      display: 'block',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    src={userReservationList[i].hotelThumbnail}
                    alt={userReservationList[i].hotelId}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <p>{`${yyyymmddToDashYyyymmdd(orderItem.startDate)} ~ ${yyyymmddToDashYyyymmdd(
                      orderItem.endDate,
                    )}`}</p>
                    {localStorage.getItem('role') === 'admin' && <p>{`承租人: ${orderItem.tenantName}`}</p>}
                    <p>{`地點: ${orderItem.hotelCity}`}</p>
                    <p>{`人數: ${orderItem.hotelPerson}`}</p>
                  </div>
                  <p style={{ alignSelf: 'flex-end', margin: 5 }}>點擊查看詳細</p>
                </ButtonBase>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <DisplayOrderInfo data={targetReservation} enable={dialogOpen} onClose={handleDialogClose}></DisplayOrderInfo>
    </Grid>
  )
}
