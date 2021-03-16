import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';

export interface ICitySelector {
    onCheckWeather: (city: string) => void;
    citiesLength: number;
}

const MAX_CITIES_ALLOWED = 5;

const CitySelector = (props: ICitySelector) => {
    const [city, setCity] = useState<string>('');

    const handleKeyDown = (ev: React.KeyboardEvent) => {
        if (ev.key === 'Enter') {
            props.onCheckWeather(city);
        }
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
                onClick={ () => props.onCheckWeather(city) } 
                variant="outline-info">Check Weather
            </Button>
        </Form>
    );
};

export default CitySelector;