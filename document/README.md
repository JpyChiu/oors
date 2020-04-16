# OORS API

## User

- post `/api/user`: create an user account
- put `/api/user`: update user information
- post `/api/user/login`: user/admin login
- get `/api/user/:id`: admin get user information from order detail

## Reservation

- post `/api/reservation`: booking a hotel
- get `/api/reservation/retrieve_user_orders`: get user all reservations
- put `/api/reservation/:id`: user can canceled his order; admin can accept/reject order

## Hotel

- get `/api/hotel/find`: find enabled rooms
