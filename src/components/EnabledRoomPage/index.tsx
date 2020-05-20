import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

import RoomDetailDialog from './roomDetailDialog'
import { StoreState } from '../../reducers/rootReducer'
import { Hotel } from '../../models/hotel'
import routes from '../../routes'
import { convertYyyymmddToDate } from '../../utils/dateConvert'
import { postReservation } from '../../epics/reservation/actions'

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
  const location = useLocation()
  const dispatch = useDispatch()
  const { enabledHotelList } = useSelector((storeState: StoreState) => ({
    enabledHotelList: storeState.hotels.enabledHotelList,
  }))
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [targetHotel, setTargetHotel] = useState<Hotel>({
    id: 'dummyId',
    hotelName: 'dummyName',
    city: 'dummyCity',
    pricePerDay: 0,
    person: 0,
    description: '',
    pictureSrc: 'https://i.imgur.com/dUETZoM.jpg',
  })

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const hotelInfoOnClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const findTargetHotel = enabledHotelList.find(hotel => hotel.id === event.currentTarget.dataset['hotelId'])
      setTargetHotel(findTargetHotel!)
      setDialogOpen(true)
    },
    [enabledHotelList],
  )

  const handleOrderClick = useCallback(() => {
    const queries = location.search.substring(1).split('&')
    if (queries.length === 2) {
      const startDate = queries[0].split('=')[1]
      const endDate = queries[1].split('=')[1]
      const days =
        (convertYyyymmddToDate(endDate).getTime() - convertYyyymmddToDate(startDate).getTime()) / (1000 * 3600 * 24)
      dispatch(postReservation({ startDate, endDate, hotelId: targetHotel.id, price: targetHotel.pricePerDay * days }))
    }
  }, [location, dispatch, targetHotel])

  const pageBackOnClick = useCallback(() => {
    history.push(routes.home)
  }, [history])

  const hotelLayout = () => {
    return (
      <>
        <GridList cellHeight={250} style={{ padding: 5 }}>
          {enabledHotelList.map((hotel: Hotel) => (
            <GridListTile key={hotel.id}>
              <img src={hotel.pictureSrc} alt={hotel.hotelName} draggable={false} />
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
        <RoomDetailDialog
          enable={dialogOpen}
          hotelData={targetHotel}
          onClose={handleDialogClose}
          onOrder={handleOrderClick}
        />
      </>
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
