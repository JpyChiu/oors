import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Button, Box, Grid, GridList } from '@material-ui/core'

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
    </List>
    // </Box>
  )
}
