import React, { useState, useCallback } from 'react'
import { createStyles, Theme, makeStyles, styled } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Button, Box, Grid, GridList } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'

import DisplayOrderInfo from '../ManageOrder/orderDetailDialog'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor: 'gray',
    },
    item: {
      // width: '80%',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    inline: {
      display: 'inline',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function ManageOrder() {
  const classes = useStyles()
  const [dense, setDense] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [targetReservation, setTargetReservation] = useState({
    id: 'dummyId',
    hotelId: 'dummyHotelId',
    city: 'dummyCity',
    people: 1,
    tenantId: 'dummyTenantId',
    startDate: '2020/01/01',
    endDate: '2020/01/01',
    price: 1000,
    isPaid: false,
    status: 'waiting',
  })

  const handleDialogOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const findTargetReservation = roomItem.find(
      reservation => reservation.id === event.currentTarget.dataset['reservationId'],
    )
    setTargetReservation(findTargetReservation!)
    setDialogOpen(true)
  }, [])

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const roomItem = [
    {
      id: '1',
      hotelId: 'Subway',
      city: 'Taipei',
      tenantId: 'Joy',
      startDate: '2020/05/14',
      endDate: '2020/05/17',
      people: 2,
      price: 1000,
      isPaid: true,
      status: '入住中',
    },
    {
      id: '2',
      hotelId: 'KFC',
      city: 'NewYork',
      tenantId: 'Adin',
      startDate: '2020/05/11',
      endDate: '2020/05/14',
      people: 4,
      price: 1000,
      isPaid: true,
      status: '入住中',
    },
    {
      id: '3',
      hotelId: '鳳梨屋',
      city: 'Paris',
      tenantId: 'Andrew',
      startDate: '2020/05/10',
      endDate: '2020/05/12',
      people: 3,
      price: 1000,
      isPaid: true,
      status: '入住中',
    },
    {
      id: '4',
      hotelId: 'Life',
      city: 'Tokyo',
      tenantId: 'Yachi',
      startDate: '2020/05/10',
      endDate: '2020/05/15',
      people: 4,
      price: 1000,
      isPaid: true,
      status: '入住中',
    },
  ]

  return (
    <Grid container justify="center" style={{ margin: 10 }}>
      <Grid item>
        <Typography color="textPrimary" variant="h4">
          訂單管理
        </Typography>
      </Grid>
      <Grid item container></Grid>
      <div className={classes.demo}>
        <List dense={dense}>
          {roomItem.map((roomItem, i) => (
            <ListItem button key={i} data-reservation-id={roomItem.id} onClick={handleDialogOpen}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`地點: ${roomItem.city} 房間名稱: ${roomItem.hotelId} 入住日期: ${roomItem.startDate} 搬出日期: ${roomItem.endDate} 人數: ${roomItem.people}`}
                //secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
      <DisplayOrderInfo data={targetReservation} enable={dialogOpen} onClose={handleDialogClose}></DisplayOrderInfo>
    </Grid>
  )
}
