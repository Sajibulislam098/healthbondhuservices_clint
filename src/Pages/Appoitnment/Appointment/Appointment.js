import React from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
// import Navigation from './../../Shared/Navigation/Navigation';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            
            <AppointmentHeader date={date} setDate={setDate} ></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;