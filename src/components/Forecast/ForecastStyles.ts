import styled from 'styled-components';

const ForecastStyles = styled.div`
    @media (max-width: 768px) {
        .row .col {
            flex: 0 1 auto;
            margin-bottom: 1em;
        }
    }
    .row {
        margin-bottom: 1em;
    }
`;

export default ForecastStyles;