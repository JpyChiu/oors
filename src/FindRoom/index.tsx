import React, { useCallback } from 'react'
import { Form } from 'react-final-form'
import { Button, Grid, MenuItem, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { AddLocation, CalendarToday, People } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns'
import { Select, KeyboardDatePicker, SelectData } from 'mui-rff'

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

export default function FindRoom() {
  const citySelectData: SelectData[] = [
    { label: 'Tokyo', value: 'Tokyo' },
    { label: 'New York', value: 'New York' },
    { label: 'Paris', value: 'Paris' },
  ]

  const personSelectData: SelectData[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
  ]

  // TODO: call api
  const onSubmit = useCallback(value => {
    console.log(value)
  }, [])

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
                <KeyboardDatePicker name="startDate" dateFunsUtils={DateFnsUtils} format="yyyy/MM/dd" required={true} />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Grid container style={{ width: 150, paddingTop: 20 }} justify="flex-start" alignItems="center">
                <CalendarToday style={{ color: '#43425D', fontSize: 35 }} />
                <Typography style={{ paddingLeft: 10 }}>退房日期</Typography>
              </Grid>
              <Grid item style={{ marginTop: 10 }}>
                <KeyboardDatePicker name="endDate" dateFunsUtils={DateFnsUtils} format="yyyy/MM/dd" required={true} />
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
