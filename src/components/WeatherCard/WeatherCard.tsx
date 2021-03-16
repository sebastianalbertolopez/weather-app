import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}: any) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary">
                    Max: { temp_max } °C 
                </Typography>
                <Typography color="textSecondary">
                    Min: { temp_min } °C 
                </Typography>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                <Typography color="textSecondary" variant="h6" gutterBottom>
                    { main }
                </Typography>
            </CardContent>
        </Card>       
    );
};
export default WeatherCard;