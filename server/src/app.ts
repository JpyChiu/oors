import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Users from '@routers/user'
import Hotel from '@routers/hotel'
import Reservation from '@routers/reservation'

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json({ limit: '50mb' }))

// Allows us to receive requests with data in x-www-form-urlencoded format
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Enables cors
app.use(cors())

// Routes
app.use('/v1/user', Users)
app.use('/v1/hotel', Hotel)
app.use('/v1/reservation', Reservation)

export default app
