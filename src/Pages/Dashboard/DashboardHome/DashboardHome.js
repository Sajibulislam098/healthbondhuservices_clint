import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calendar from './../../Shared/Calendar/Calendar';
import Appointments from './../Appoinments/Appointments';






const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())

    return (
        <div>
            <h3 className=" d-flex align-item-center justify-content-center text-danger">DASHBOARD</h3>
               <Grid container spacing={2}>
                   
                        <Grid item xs={12} sm={5}>
                            <Calendar
                                date={date}
                                setDate={setDate}
                            ></Calendar>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Appointments date={date}></Appointments>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default DashboardHome;