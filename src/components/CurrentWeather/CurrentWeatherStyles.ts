import styled from 'styled-components';

const CurrentWeatherStyles = styled.div`
    margin-bottom: 2em;
    font-weight: bold;
    .card-header {
        font-size: 16px;
    }
    .temp {
        font-size: 70px;
        color: #FF8E53;
    }
    .feels-like {
        font-size: 20px;
        color: #C0C0C0;
    }
    .description {
        margin-bottom: 1em;
        font-size: 30px;
    }
    .secondary-data {
        font-size: 16px;
    }
`;

export default CurrentWeatherStyles;