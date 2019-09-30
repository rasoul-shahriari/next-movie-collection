import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: #fff;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;

        font-display: fallback; 
            text-rendering: optimizeLegibility;
        }

        a {
            color: #1b789e;
            text-decoration: none;
        }

        a:hover {
            color: #166281;
        }

        h1,
        h2,
        h3 {
            margin: 40px 0 30px;
        }

        h1 {
            font-size: 42px;
        }

        h2 {
            font-size: 36px;
        }

        p {
            margin: 0 0 10px;
        }

        img {
            max-width: 100%;
        }
`;
