import React, { useState, useEffect, useCallback } from 'react';
import CitySelector from './components/CitySelector/CitySelector';
import WeatherList from './components/WeatherList/WeatherList';
import useCurrentLocation from './hooks/useCurrentLocation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useForecast from './hooks/useForecast';
import Loader from './components/Loader/Loader';
import useWeather from './hooks/useWeather';

const App = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [selectedCity, setSelectedCity] = useState<string>('');

    // Obtiene los datos de la ubicación actual del usuario.
    const currentLocation = useCurrentLocation();

    const { forecastData, forecastStatus } = useForecast(selectedCity || 'buenos aires');
    const { weatherData, weatherStatus } = useWeather(selectedCity || 'buenos aires');

    const getContent = () => {
        //if(error) return <h2>Error when fetching: {error}</h2>
        if (forecastStatus === 'loading') return <Loader />
        if (forecastStatus === 'ready') return <WeatherList weathers={ forecastData.list } city={selectedCity} />

    };

    const checkWeatherHandler = useCallback((city: string) => {
        setSelectedCity(city);
        setCities((cities) => [...cities, city]);
    }, []);

    useEffect(
        () => currentLocation && checkWeatherHandler(currentLocation.city), 
        [currentLocation, checkWeatherHandler]
    );

    return (
        <>
            <Header>
                <CitySelector 
                    onCheckWeather={ (city: string) => checkWeatherHandler(city) }
                    citiesLength={cities.length}
                />
            </Header>
            {/*currentWeatherData && (
                <CurrentWeather weatherData={currentWeatherData} />
            )*/}
            {/*forecastData && <Forecast forecastData={forecastData} />*/}
            <div className="main">
                {getContent()}
            </div>
            <Footer />
        </>
    );
};

export default App;