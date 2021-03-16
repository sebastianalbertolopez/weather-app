import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeatherList = ({weathers, city}: any) => {
    
    const getDailyForecast = (forecast:any): any => {
        const dailyForecast: any = [];
        let i;

        for (i = 0; i < forecast.length; i += 8) {
            dailyForecast.push(forecast[i]);
        }

        return dailyForecast;
    };

    return (
        <>
            <Row>
                {getDailyForecast(weathers).map(({dt,main, weather}: any) => (
                    <Col key={dt}>
                        <WeatherCard temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
                    </Col>
                ))} 
            </Row>
            <Row>
                {city}
            </Row>
        </>
    )
}

export default WeatherList;