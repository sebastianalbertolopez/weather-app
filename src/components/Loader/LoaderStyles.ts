import styled from 'styled-components';

const HeaderStyles = styled.div`
    flex: 1;
    min-height: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    
    img {
        -webkit-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        transform: rotate(20deg);
        -webkit-animation: rotateLoading 1.5s ease-in-out infinite;
        animation: rotateLoading 1.5s ease-in-out infinite; }
        
        @-webkit-keyframes rotateLoading {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg); 
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg); 
            }
        }
        @keyframes rotateLoading {
            from {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg); 
            }
            to {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg); 
            }
        }
    }
`;

export default HeaderStyles;