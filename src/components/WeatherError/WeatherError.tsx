import React from 'react';
import { Button } from 'react-bootstrap';
import NoLocationFound from '../../assets/no-location.svg';

export default function WeatherCardError() {
    return (
        <div className='weatherCardContainer'>
            <div className='weatherCardError'>
                <img 
                    src={ NoLocationFound } 
                    alt='no location found'
                />
                <p>No location found.</p>
            </div>
        </div>
    );
}