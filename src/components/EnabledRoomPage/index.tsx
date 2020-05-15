import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

import { StoreState } from '../../reducers/rootReducer'
import { Hotel } from '../../models/hotel'
import testImg from '../../Login/logo.jpg'
import routes from '../../routes'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

export default function EnabledRoomPage() {
  const classes = useStyles()
  const history = useHistory()
  const { enabledHotelList } = useSelector((storeState: StoreState) => ({
    enabledHotelList: storeState.hotels.enabledHotelList,
  }))

  const hotelInfoOnClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const targetHotel = enabledHotelList.find(hotel => hotel.id === event.currentTarget.dataset['hotelId'])
      console.log(targetHotel)
    },
    [enabledHotelList],
  )

  const pageBackOnClick = useCallback(() => {
    history.push(routes.home)
  }, [history])

  const hotelLayout = () => {
    return (
      <GridList cellHeight={250}>
        {enabledHotelList.map((hotel: Hotel) => (
          <GridListTile key={hotel.id}>
            <img src={'https://i.imgur.com/dUETZoM.jpg'} alt={hotel.hotelName} draggable={false} />
            <GridListTileBar
              title={hotel.hotelName}
              subtitle={<span>price: {hotel.pricePerDay}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${hotel.hotelName}`}
                  className={classes.icon}
                  data-hotel-id={hotel.id}
                  onClick={hotelInfoOnClick}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    )
  }

  const noHotelsLayout = () => {
    return (
      <div>
        <p>no hotels find</p>
        <Button variant="outlined" onClick={pageBackOnClick}>
          返回搜尋頁面
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <h4>Hotels</h4>
      </Grid>
      {enabledHotelList.length === 0 ? noHotelsLayout() : hotelLayout()}
    </div>
  )
}
