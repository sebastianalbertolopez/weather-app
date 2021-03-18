import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { IWeather } from '../../apis/models/weather';
import CurrentWeatherStyles from './CurrentWeatherStyles';

export interface CurrentWeatherProps {
    weather: IWeather;
}

const CurrentWeather = ({ weather }: CurrentWeatherProps) => {
    return (
        <CurrentWeatherStyles>
            <Card className="text-center" border="dark">
                <Card.Header>CURRENT WEATHER</Card.Header>
                <Card.Body>
                    <h4>{ weather.name }, { weather.sys.country }</h4>
                    <div className="temp">{ Math.round(weather.main.temp) }°C</div>
                    <div className="feels-like">
                        Feels like { Math.round(weather.main.feels_like) }°C
                    </div>
                    <img
                        src={`https://openweathermap.org/img/wn/${ weather.weather[0].icon }@2x.png`}
                        alt=""
                        width="100"
                        height="100"
                    />
                    <div className="description">{ weather.weather[0].main }</div>
                    <div>Humidity: { weather.main.humidity }%</div>
                    <div>Wind: { weather.wind.speed } m/s</div>
                    <div>Pressure: { weather.main.pressure } hPa</div>
                </Card.Body>
            </Card>
        </CurrentWeatherStyles>
    );
}

export default CurrentWeather;