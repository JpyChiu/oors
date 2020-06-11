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
<<<<<<< HEAD
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
=======
import DisplayOrderInfo from '../ManageOrder/orderDetailDialog'
import { Reservation } from '../../models/reservation'
>>>>>>> 57d45440f9ead21b3cf02014fa2a51f658a23f18

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
<<<<<<< HEAD
  const [dense, setDense] = React.useState(false);
  //const [secondary, setSecondary] = React.useState(false);
  const roomItem = [
    {
      text: 'Subway',
      city: 'Taipei',
      liveDate: '2020/05/14',
      endDate: '2020/05/17',
      people: '2',
    },
    {
      text: 'KFC',
      city: 'NewYork',
      liveDate: '2020/05/11',
      endDate: '2020/05/14',
      people: '4',
    },
    {
      text: '鳳梨屋',
      city: 'Paris',
      liveDate: '2020/05/10',
      endDate: '2020/05/12',
      people: '3',
    },
    {
      text: 'Life',
      city: 'Tokyo',
      liveDate: '2020/05/10',
      endDate: '2020/05/15',
      people: '4',
    },
  ]
=======
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
>>>>>>> 57d45440f9ead21b3cf02014fa2a51f658a23f18

   return (
      <Grid container justify="center" style={{ margin: 10 }}>
        <Grid item>
          <Typography color="textPrimary" variant="h4">
            訂單管理
          </Typography>
        </Grid>
        <Grid item container >
        </Grid>
        {/*<List className={classes.root}>
            <ListItem alignItems="center" className={classes.item}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
              </ListItemAvatar>
            <ListItemText primary="Brunch this weekend?" />
              <ListItemSecondaryAction>
                <Button variant="outlined">刪除</Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>*/}


<<<<<<< HEAD
          <div className={classes.demo}>
            <List dense={dense}>
            {roomItem.map((roomItem, i) => (
              <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`地點: ${roomItem.city} 房間名稱: ${roomItem.text} 入住日期: ${roomItem.liveDate} 搬出日期: ${roomItem.endDate} 人數: ${roomItem.people}`}
                //secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            ))
            }
              {/*<ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="地點:Taipei &nbsp;&nbsp;&nbsp; 房間名稱:Subway &nbsp;&nbsp;&nbsp; 入住日期:2020/05/14 &nbsp;&nbsp;&nbsp; 搬出日期:2020/05/17 &nbsp;&nbsp;&nbsp; 人數:2"
                  //secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="地點:Taipei &nbsp;&nbsp;&nbsp; 房間名稱:Subway &nbsp;&nbsp;&nbsp; 入住日期:2020/05/14 &nbsp;&nbsp;&nbsp; 搬出日期:2020/05/17 &nbsp;&nbsp;&nbsp; 人數:2"
                  //secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="地點:Taipei &nbsp;&nbsp;&nbsp; 房間名稱:Subway &nbsp;&nbsp;&nbsp; 入住日期:2020/05/14 &nbsp;&nbsp;&nbsp; 搬出日期:2020/05/17 &nbsp;&nbsp;&nbsp; 人數:2"
                  //secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="地點:Taipei &nbsp;&nbsp;&nbsp; 房間名稱:Subway &nbsp;&nbsp;&nbsp; 入住日期:2020/05/14 &nbsp;&nbsp;&nbsp; 搬出日期:2020/05/17 &nbsp;&nbsp;&nbsp; 人數:2"
                  //secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="地點:Taipei &nbsp;&nbsp;&nbsp; 房間名稱:Subway &nbsp;&nbsp;&nbsp; 入住日期:2020/05/14 &nbsp;&nbsp;&nbsp; 搬出日期:2020/05/17 &nbsp;&nbsp;&nbsp; 人數:2"
                  //secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>*/}
            </List>
          </div>
      </Grid>
   )
=======
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
>>>>>>> 57d45440f9ead21b3cf02014fa2a51f658a23f18
}
