import { API_KEY, API_BASE_URL, IP_API_URL } from './config'

export const forecastURL = (city: string): string => {
    return `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
}

export const currentWeatherURL = (city: string): string => {
    return `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
}

export const currentLocationURL = (): string => {
    return `${IP_API_URL}`;
}