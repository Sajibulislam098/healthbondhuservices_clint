import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { Alert, Container } from "@mui/material";
import Booking from "./../Booking/Booking";
import Typography from "@mui/material/Typography";

const bookings = [
  {
      id: 1,
      name: 'Dr M. M. Jayed Hossain Chowdhury',
      time: '08.00 AM - 09.00 AM',
      fees: 500,
      space: 10,
  },
  {
      id: 2,
      name: 'Dr. Bhabesh Chandra Mondal',
      time: '09.00 AM - 10.00 AM',
      fees: 600,
      space: 8,
  },
  {
      id: 3,
      name: 'Dr. Shah Muhammad Ali',
      time: '10.00 AM - 11.00 AM',
      fees: 800,
      space: 9,
  },
  {
      id: 4,
      name: 'Dr. Ranadhir Kumar Kundu      ',
      time: '11.00 AM - 12.00 PM',
      fees: 700,
      space: 5,
  },
  {
      id: 5,
      name: 'Dr. Md. Quamrul Islam',
      time: '06.00 PM - 07.00 PM',
      fees: 500,
      space: 10,
  },
  {
      id: 6,
      name: 'Prof. Wahiuddin Mahmood',
      time: '07.00 PM - 08.00 PM',
      fees: 600,
      space: 10,
  },
];
const AvailableAppointment = ({ date }) => {
  const [bookingSuccess,setBookingSuccess]=useState(false)
  return (
    <Container>
      <Typography
        sx={{ color: "info.main",mb:3}}
        variant="h4"
        gutterBottom
        component="div"
      >
        AvailableAppointment {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success">Appointment Booked Successfully!</Alert>}

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking 
          key={booking.id} 
          booking={booking}
          date={date}
          setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
