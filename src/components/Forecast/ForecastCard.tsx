import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";
import { IWeather } from '../../apis/models/weather';
import ForecastCardStyles from './ForecastCardStyles';

export interface ForecastProps {
    forecast: IWeather;
}

const ForecastCard = ({ forecast }: ForecastProps) => {
    return (
        <ForecastCardStyles>
            <Card border="dark" className='text-center mb-sm-2'>
                <Card.Header>
                    { (moment(forecast.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd')).toUpperCase() }
                </ Card.Header>
                <Card.Body>
                    <div className="temp">{ Math.round(forecast.main.temp) }°C</div>
                    <img
                        src={ `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png` }
                        alt=""
                        width="150"
                        height="150"
                    />
                    <div className="description">{ forecast.weather[0].main }</div>
                    <div>Feels like { Math.round(forecast.main.feels_like) }°C</div>
                    <div>Humidity: { forecast.main.humidity }%</div>
                    <div>Wind: { forecast.wind.speed } m/s</div>
                    <div>Pressure: {forecast.main.pressure} hPa</div>
                </Card.Body>
            </Card>
        </ForecastCardStyles>
    );
};

export default ForecastCard;