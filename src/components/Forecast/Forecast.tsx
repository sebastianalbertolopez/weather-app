import React from "react";
import { Col, Row } from "react-bootstrap";
import { IForecast } from "../../apis/models/forecast";
import { IWeather } from '../../apis/models/weather';
import ForecastCard from "./ForecastCard";
import ForecastStyles from './ForecastStyles';

export interface ForecastProps {
    forecastList?: IForecast;
}

const Forecast = ({ forecastList }: ForecastProps) => {
    const getDailyForecast = (forecast?: IForecast): IForecast => {
        const dailyForecast: IForecast = [];

        if (forecast) {
            for (let i = 0; i < forecast.length; i += 8) {
                dailyForecast.push(forecast[i]);
            }
        }

        return dailyForecast;
    };

    return (
        <ForecastStyles>
            <Row>
                {getDailyForecast(forecastList).map((forecastItem: IWeather, idx: number) => (
                    <Col key={ idx }>
                        <ForecastCard forecast={ forecastItem } />
                    </Col>
                ))} 
            </Row>
        </ForecastStyles>
    );
};

export default Forecast;