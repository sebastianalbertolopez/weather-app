import React from "react";
import { Navbar } from 'react-bootstrap';
import HeaderStyles from './HeaderStyles';

import HeaderIcon from '../../assets/images/weather-icon.svg';

const Footer = ({ children }: any) => {
    return(
        <HeaderStyles>
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={HeaderIcon}
                        width="33"
                        height="33"
                        className="d-inline-block align-top"
                    />{' '}
                    <span>Weather App</span>
                </Navbar.Brand>
                { children }
            </Navbar>
        </HeaderStyles>
    );
}

export default Footer;