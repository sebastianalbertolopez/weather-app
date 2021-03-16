import { useEffect, useState } from "react";
import { currentWeatherURL } from "../apis/utils";
import useFetch, { Status } from "./useFetch";

interface UseWeatherResponse {
    weatherData: any | undefined;
    weatherStatus: Status;
}

const useWeather = (city: string): UseWeatherResponse => {
    const [url, setUrl] = useState<string>(currentWeatherURL(city));

    const {
        data: weatherData,
        status: weatherStatus,
    } = useFetch<any>(url);

    useEffect( () => {
        setUrl(currentWeatherURL(city));
    }, [city]);

    return {
        weatherData,
        weatherStatus
    };
};

export default useWeather;