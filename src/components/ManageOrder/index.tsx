import React, { useState } from 'react'
import { createStyles, Theme, makeStyles, styled } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Button, Box, Grid, GridList } from '@material-ui/core'
import DisplayOrderInfo from '../ManageOrder/orderDetailDialog'
import { Reservation } from '../../models/reservation'

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
    },
    inline: {
      display: 'inline',
    },
  }),
)

export default function ManageOrder() {
  const classes = useStyles()
  const [dialogOpen, setDialogOpen] = useState(false)

  const tempOrderInfo: Reservation = {
    id: 'dummyId',
    hotelId: 'dummyHotelId',
    tenantId: 'dummyTenantId',
    startDate: 'dummyStartDate',
    endDate: 'dummyEndDate',
    price: 1000,
    isPaid: false,
    status: 'waiting'
  }

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  // return (
  //   <Grid container justify="center" style={{ margin: 10 }}>
  //     <Grid item>
  //       <Typography color="textPrimary" variant="h4">
  //         訂單管理
  //       </Typography>
  //     </Grid>
  //     <Grid item container>

  //     </Grid>
  //   </Grid>
  // )

  return (
    // <Box border={1} borderColor="primary.main">
    <List className={classes.root}>
      <ListItem alignItems="center" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" />
        <ListItemSecondaryAction>
          <Button variant="outlined">刪除</Button>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem alignItems="flex-start" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Travis Howard" />
        </ListItemAvatar>
        <ListItemText primary="Summer BBQ" />
        <ListItemSecondaryAction>
          <Button variant="outlined">刪除</Button>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem alignItems="flex-start" className={classes.item}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" />
        </ListItemAvatar>
        <ListItemText primary="Oui Oui" />
        <ListItemSecondaryAction>
          <Button variant="outlined">刪除</Button>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem alignItems="flex-start" className={classes.item} onClick={handleDialogOpen}>
        <ListItemAvatar>
          <Avatar/>
        </ListItemAvatar>
        <ListItemText primary="測試顯示訂單" />
        <ListItemSecondaryAction>
          <Button variant="outlined">刪除</Button>
        </ListItemSecondaryAction>
      </ListItem>

      <DisplayOrderInfo
        data={tempOrderInfo}
        enable={dialogOpen}
        onClose={handleDialogClose}></DisplayOrderInfo>

    </List>

    

    // </Box>
  )
}
