import React from 'react';
import { Card } from 'react-bootstrap';
import { IWeather } from '../../apis/models/weather';
import CurrentWeatherStyles from './CurrentWeatherStyles';

export interface CurrentWeatherProps {
    weather: IWeather;
}

const CurrentWeather = ({ weather }: CurrentWeatherProps) => {
    return (
        <CurrentWeatherStyles>
            <Card className="text-center" border="dark">
                <Card.Header>CURRENT</Card.Header>
                <Card.Body>
                    <Card.Title>{weather.name}, {weather.sys.country}</Card.Title>
                    <div className="description">{weather.weather[0].main}</div>
                    <div className="temp">
                        {Math.round(weather.main.temp)}
                        <span className="degrees">°C</span>
                    </div>
                    <div className="feels-like">
                        Feels like {Math.round(weather.main.feels_like)}°C
                    </div>
                    <img
                        className="weather-icon"
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt=""
                    />
                    <div>Humidity: {weather.main.humidity}%</div>
                    <div>Wind: {weather.wind.speed} m/s</div>
                    <div>Pressure: {weather.main.pressure} hPa</div>
                </Card.Body>
            </Card>
        </CurrentWeatherStyles>
    );
}

export default CurrentWeather;