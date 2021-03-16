import { useEffect, useState } from "react";
import { forecastURL } from "../apis/utils";
import useFetch, { Status } from "./useFetch";

interface UseForecastResponse {
    forecastData: any | undefined;
    forecastStatus: Status;
}

const UseForecast = (city: string): UseForecastResponse => {
    const [url, setUrl] = useState<string>(forecastURL(city));

    const {
        data: forecastData,
        status: forecastStatus,
    } = useFetch<any>(url);

    useEffect(() => {
        setUrl(forecastURL(city));
    }, [city]);

    return {
        forecastData,
        forecastStatus
    };
};

export default UseForecast;