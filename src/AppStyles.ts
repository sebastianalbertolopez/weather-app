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
        font-size: 13px;
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        display: flex;
        flex-direction: column;
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
            font-size: 16px;
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