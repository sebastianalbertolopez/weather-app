import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";
import { IWeather } from '../../apis/models/weather';

export interface ForecastProps {
    forecast: IWeather;
}

const ForecastCard = ({ forecast }: ForecastProps) => {
    return (
        <Card border="dark" className='text-center mb-sm-2'>
            <Card.Header>
                { (moment(forecast.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd')).toUpperCase() }
            </ Card.Header>
            <Card.Body>
                <Card.Title>{ Math.round(forecast.main.temp) }°C</Card.Title>
                <img
                    src={ `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png` }
                    alt=""
                />
                <div>{ forecast.weather[0].main }</div>
                <div className="info">
                    <div>Feels like { Math.round(forecast.main.feels_like) }°C</div>
                    <div>Humidity: { forecast.main.humidity }%</div>
                    <div>Wind: { forecast.wind.speed } m/s</div>
                    <div>Pressure: {forecast.main.pressure} hPa</div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ForecastCard;