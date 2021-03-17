import React, { useState, useEffect, useCallback } from 'react';
import CitySelector from './components/CitySelector/CitySelector';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import useCurrentLocation from './hooks/useCurrentLocation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useForecast from './hooks/useForecast';
import Loader from './components/Loader/Loader';
import useWeather from './hooks/useWeather';
import WeatherError from './components/WeatherError/WeatherError';
import { Tab, Tabs } from 'react-bootstrap';

const App = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');

    // Obtiene los datos de la ubicación actual del usuario.
    const currentLocation = useCurrentLocation();

    const { forecastData, forecastStatus } = useForecast(selectedCity || 'BUENOS AIRES');
    const { weatherData, weatherStatus } = useWeather(selectedCity || 'BUENOS AIRES');

    const getWeatherContent = () => {
        if (forecastStatus === 'loading') {
            return <Loader />;
        }
        else if (forecastStatus === 'ready') {
            return ( 
                forecastData && (<CurrentWeather 
                    weathers={ forecastData.list } 
                    city={selectedCity} 
                />)
            );
        }
        else if (forecastStatus === 'error') {
            return <WeatherError />;
        }
    };

    const checkWeatherHandler = useCallback((city: string) => {
        const upperCaseCity = city.toUpperCase();
        setSelectedCity(upperCaseCity);
        setCities((cities) => [...cities, upperCaseCity]);
    }, []);

    useEffect(
        () => currentLocation && checkWeatherHandler(currentLocation.city), 
        [currentLocation, checkWeatherHandler]
    );

    const handleTabChange = (tabIdx: any, event: any) => {
        event.preventDefault();

        const citiesCopy = [...cities];
        const index = tabIdx as number;
        setSelectedCity(citiesCopy[index]);
    };

    const tabs = cities.map((city, idx) => {
        return (
            <Tab eventKey={ idx.toString() } title={ city }>
                { getWeatherContent() }
            </Tab>
        );
    });

    return (
        <>
            <Header>
                <CitySelector 
                    onCheckWeather={ (city: string) => checkWeatherHandler(city) }
                    citiesLength={cities.length}
                />
            </Header>
            <div className="main">
                <Tabs onSelect={ handleTabChange }>
                    { tabs }
                </Tabs>
            </div>
            <Footer />
        </>
    );
};

export default App;