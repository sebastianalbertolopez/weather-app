import styled from 'styled-components';

const CurrentWeatherStyles = styled.div`
    margin-bottom: 1em;
    font-weight: bold;
    .card-header {
        font-size: 16px;
    }
    .temp {
        font-size: 40px;
        color: #FF8E53;
    }
    .feels-like {
        font-size: 16px;
        color: #C0C0C0;
    }
    .description {
        margin-bottom: 1em;
        font-size: 20px;
    }
`;

export default CurrentWeatherStyles;