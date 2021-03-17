import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans JP', sans-serif;
        height: 100%;
        width: 100%;
        background: #fafafa;
    }
    body {
        display: flex;
        flex-direction: column;
    }
    h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 25px;
    }
    #root {
        min-height: 100vh;
        display: flex;
        flex: 1;
        width: auto;
        flex-direction: column;
    }
    .main {
        background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
        flex: 1;
        overflow: auto;
        position: relative;
        padding: 1em;

        .nav-tabs {
            border-bottom: 1px solid #FAFAFA;
            margin-bottom: 1em;
        }
        .nav-tabs .nav-item.show .nav-link, 
        .nav-tabs .nav-link.active, 
        .nav-link:not(.active), 
        .nav-link:not(.active):hover {
            color: #FAFAFA;
            background-color: transparent;
            border: none;
            border-radius: 0;
        }
        .nav-tabs .nav-link.active {
            border-bottom: 2px solid #FAFAFA;
        }
        .nav-link:not(.active) {
            color: #333;
        }
        .tab-content, .tab-pane {
            height: 100%;
        }
    }
`;

export default AppStyles;