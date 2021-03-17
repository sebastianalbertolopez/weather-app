import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export interface ICitySelector {
    onCheckWeather: (city: string) => void;
    citiesLength: number;
}

const MAX_CITIES_ALLOWED = 5;

const CitySelector = (props: ICitySelector) => {
    const [city, setCity] = useState<string>('');

    const handleKeyDown = (ev: React.KeyboardEvent) => {
        if (ev.key === 'Enter') {
            checkWeather(city);
        }
    }

    const checkWeather = (city: string) => {
        props.onCheckWeather(city);
        setCity('');
    }

    return (
        <Form inline>
            <FormControl 
                placeholder="Enter a city e.g.: Buenos Aires" 
                onChange={ (event) => setCity(event.target.value) } 
                value={ city } 
                onKeyDown={ handleKeyDown }
                className="mr-sm-2"
            />
            <Button 
                disabled={ !city || props.citiesLength === MAX_CITIES_ALLOWED } 
                onClick={ () => checkWeather(city) } 
                variant="outline-info">Check Weather
            </Button>
        </Form>
    );
};

export default CitySelector;