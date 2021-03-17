import React from "react";
import { Col, Row } from "react-bootstrap";
import { IWeather } from '../../apis/models/weather';
import ForecastCard from "./ForecastCard";

export interface ForecastProps {
    forecastList?: IWeather[];
}

const Forecast = ({ forecastList }: ForecastProps) => {
    const getDailyForecast = (forecast?: IWeather[]): IWeather[] => {
        const dailyForecast: IWeather[] = [];

        if (forecast) {
            for (let i = 0; i < forecast.length; i += 8) {
                dailyForecast.push(forecast[i]);
            }
        }

        return dailyForecast;
    };

    return (
        <Row>
            {getDailyForecast(forecastList).map((forecastItem: IWeather, idx: number) => (
                <Col key={ idx }>
                    <ForecastCard forecast={ forecastItem } />
                </Col>
            ))} 
        </Row>
    );
};

export default Forecast;