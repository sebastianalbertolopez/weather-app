import React, { useState, useEffect, useCallback } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useForecast from './hooks/useForecast';
import useWeather from './hooks/useWeather';
import useCurrentLocation from './hooks/useCurrentLocation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import CitySelector from './components/CitySelector/CitySelector';
import WeatherError from './components/WeatherError/WeatherError';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';

const App = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');

    // Obtiene los datos de la ubicación actual del usuario.
    const currentLocation = useCurrentLocation();

    const { forecastData, forecastStatus } = useForecast(selectedCity || 'BUENOS AIRES');
    const { weatherData, weatherStatus } = useWeather(selectedCity || 'BUENOS AIRES');

    const getWeatherContent = () => {
        if (forecastStatus === 'loading' || weatherStatus === 'loading') {
            return <Loader />;
        }
        else if (forecastStatus === 'ready' && weatherStatus === 'ready') {
            return (
                <>
                    { weatherData && <CurrentWeather weather={ weatherData } /> }
                    { forecastData && <Forecast forecastList={ forecastData.list } /> }
                </>
            );
        }
        else if (forecastStatus === 'error' || weatherStatus === 'error') {
            return <WeatherError />;
        }
    };

    const checkWeatherHandler = useCallback((city: string) => {
        const upperCaseCity = city.toUpperCase();
        setSelectedCity(upperCaseCity);
        setCities((cities) => {
            let citiesCopy = [...cities];
            if (!citiesCopy.includes(upperCaseCity)) {
                citiesCopy.push(upperCaseCity);
                setCities(citiesCopy);
            }

            return citiesCopy;
        });
        //setCities((cities) => [...cities, upperCaseCity]);
    }, []);

    useEffect(
        () => currentLocation && checkWeatherHandler(currentLocation.city), 
        [currentLocation, checkWeatherHandler]
    );

    const handleTabChange = (city: any, event: any) => {
        event.preventDefault();
        setSelectedCity(city as string);
    };

    const tabs = cities.map((city, idx) => {
        return (
            <Tab eventKey={ city } title={ city } key={ idx }>
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
                <Tabs onSelect={ handleTabChange } activeKey={ selectedCity }>
                    { tabs }
                </Tabs>
            </div>
            <Footer />
        </>
    );
};

export default App;