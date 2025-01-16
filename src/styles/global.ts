import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #C4C4CC;
  }

  body {
    background-color: #202024;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  }

  .app-container {
    display: flex;
    gap: 2.5rem;
    max-width: 1250px;
    margin: 2.5rem auto 0;
    padding: 0 2rem;

    div:first-child {
      flex: 1;
      height: 40px;
      background-color: blue;
    }

    div:last-child {
      flex-grow: 3;
      height: 40px;
      background-color: red;
    }
  }
`
