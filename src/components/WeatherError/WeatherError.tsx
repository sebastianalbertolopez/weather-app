import React from 'react';
import NoLocationFound from '../../assets/images/no-location.svg';
import WeatherErrorStyles from './WeatherErrorStyles';

export default function WeatherCardError() {
    return (
        <WeatherErrorStyles>
            <div className='error-container'>
                <div className='error-card'>
                    <img 
                        src={ NoLocationFound } 
                        alt='no location found'
                        width="50%"
                        height="50%"
                    />
                    <h1>No location found.</h1>
                </div>
            </div>
        </WeatherErrorStyles>
    );
}