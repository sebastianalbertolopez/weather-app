import styled from 'styled-components';

const WeatherErrorStyles = styled.div`
    min-height: 320px;
    min-width: 320px;
    background: #FFF;
    -webkit-box-shadow: 1px 1px 4px #333;
    box-shadow: 1px 1px 4px #333;
    border-radius: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    
    p {
        width: 70%;
        text-align: center; 
    }
`;

export default WeatherErrorStyles;