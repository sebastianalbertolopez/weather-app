import styled from 'styled-components';

const WeatherErrorStyles = styled.div`
    .error-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #797979;
        .error-card {
            min-height: 360px;
            min-width: 360px;
            background: #FFF;
            box-shadow: 1px 1px 4px #333;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
        }
    }
`;

export default WeatherErrorStyles;