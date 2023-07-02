import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-bg : black;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        height : 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color : var(--color-bg);

        margin: 0;

        width: 100vw;
        height : 100vh;

        font-size: 1.2rem;

    }

    #root {
        display: flex;
        height: 100%;
        overflow-y: auto;
        padding: 1.5rem;
    }

 
`;
