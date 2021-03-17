import React from "react";
import { IWeather } from '../../apis/models/weather';

export interface ForecastProps {
    forecast: IWeather;
}

const ForecastCard = ({ forecast }: ForecastProps) => {
    return (
        <>
        </>
    );
};

export default ForecastCard;