import React from "react";
import FooterStyles from './FooterStyles';

const Footer = () => {
    return(
        <FooterStyles role="contentinfo">
            <div>
                <span>Copyright © Get Weather - data sources/APIs used </span>
                <a href="https://openweathermap.org/">OpenWeatherMap API</a>
                <span> and </span>
                <a href="https://ipapi.co/">IP Location API</a>
            </div>
        </FooterStyles>
    );
}

export default Footer;