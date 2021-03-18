import styled from "styled-components";

const CitySelectorStyles = styled.div`
    display: flex;
    flex: 1;

    form.form-inline {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        flex: 1;
        justify-content: flex-end;

        input {
            width: auto;
        }
        button {
            margin-left: .5em;
        }
    
        @media (max-width: 768px) {
            input {
                width: 100%;
            }
            button {
                display: none;
            }
        }
    }
`

export default CitySelectorStyles;