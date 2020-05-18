import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-final-form'
import { Button, Grid, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { AddLocation, CalendarToday, People } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns'
import { Select, KeyboardDatePicker, SelectData } from 'mui-rff'

import { getAllHotels, getEnabledHotels } from '../../epics/hotel/actions'
import { StoreState } from '../../reducers/rootReducer'
import { Hotel } from '../../models/hotel'
import { dateToYyyymmdd } from '../../utils/dateConvert'
import routes from '../../routes'

const SearchButton = styled(Button)({
  width: 185,
  height: 50,
  textAlign: 'center',
  marginTop: 30,
  '&:hover': {
    backgroundColor: '#2E3B55',
    color: '#ffffff',
  },
})

interface FormData {
  city: string
  startDate: Date
  endDate: Date
  person: number
}

export default function FindRoom() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { hotelList } = useSelector((storeState: StoreState) => ({
    hotelList: storeState.hotels.hotelList,
  }))

  useEffect(() => {
    dispatch(getAllHotels())
  }, [dispatch])

  const citySelectData: SelectData[] = hotelList
    .filter((hotel: Hotel, index: number, self: Hotel[]) => {
      return index === self.findIndex(t => t.city === hotel.city)
    })
    .map((hotel: Hotel) => {
      return { label: hotel.city, value: hotel.city }
    })

  const personSelectData: SelectData[] = hotelList
    .filter((hotel: Hotel, index: number, self: Hotel[]) => {
      return index === self.findIndex(t => t.person === hotel.person)
    })
    .map((hotel: Hotel) => {
      return { label: `${hotel.person}`, value: hotel.person }
    })

  const onSubmit = useCallback(
    (formData: FormData) => {
      dispatch(
        getEnabledHotels({
          startDate: dateToYyyymmdd(formData.startDate),
          endDate: dateToYyyymmdd(formData.endDate),
          city: formData.city,
          person: formData.person,
        }),
      )
      history.push(routes.enabledRoomPage)
    },
    [dispatch, history],
  )

  return (
    <div style={{ marginTop: 100 }}>
      <Form
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify="center" alignItems="center">
              <Grid container style={{ width: 150, paddingTop: 20 }} justify="flex-start" alignItems="center">
                <AddLocation style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingLeft: 15 }}>地點</Typography>
              </Grid>
              <Grid item>
                <Select
                  name="city"
                  required={true}
                  data={citySelectData}
                  variant="outlined"
                  style={{ width: 230, marginTop: 15 }}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Grid container style={{ width: 150, paddingTop: 20 }} justify="flex-start" alignItems="center">
                <CalendarToday style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingLeft: 10 }}>入住日期</Typography>
              </Grid>
              <Grid item style={{ marginTop: 10 }}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  name="startDate"
                  dateFunsUtils={DateFnsUtils}
                  format="yyyy/MM/dd"
                  required={true}
                  style={{ width: 230 }}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Grid container style={{ width: 150, paddingTop: 20 }} justify="flex-start" alignItems="center">
                <CalendarToday style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingLeft: 10 }}>退房日期</Typography>
              </Grid>
              <Grid item style={{ marginTop: 10 }}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  name="endDate"
                  dateFunsUtils={DateFnsUtils}
                  format="yyyy/MM/dd"
                  required={true}
                  style={{ width: 230 }}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Grid container style={{ width: 150, paddingTop: 20 }} justify="flex-start" alignItems="center">
                <People style={{ color: '#43425D', paddingLeft: 7, fontSize: 35 }} />
                <Typography style={{ paddingLeft: 10 }}>人數</Typography>
              </Grid>
              <Grid item>
                <Select
                  name="person"
                  formControlProps={{ margin: 'none' }}
                  variant="outlined"
                  style={{ width: 230, marginTop: 15 }}
                  required={true}
                  data={personSelectData}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="center" alignItems="center" style={{ marginTop: 80 }}>
              <SearchButton variant="outlined" type="submit">
                搜尋空房
              </SearchButton>
            </Grid>
          </form>
        )}
      />
    </div>
  )
}