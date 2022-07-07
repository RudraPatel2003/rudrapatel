import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; 
  }

  //prevent animations from playing on window resize
  .resize-animation-stopper * {
    animation: none !important;
    transition: none !important;
  }

  :root {
    scroll-behavior: smooth;

    --color-background: #071a38;
    --color-background-dark: #06162F; // footer
    --color-background-dark-transparent: #06162F5F; // nav bar when scrolling 
    --color-background-darkest: #05081f; // splash screen
    --color-background-light: #0A2043; // project cards
    --color-text-primary: #B7D0F7;
    --color-text-secondary: #6D88B0; 
    --color-accent: #57ECC3;

    --fw-regular: 400;
    --fw-bold: 700;
    --fw-black: 900;

    --nav-height: 6.25rem; // 100px
  }

  body {
    background: var(--color-background);
    min-height: 100%;
  }
  
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-background-dark)
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-text-secondary);
    border-radius: 1rem;
  }
`

export default GlobalStyle