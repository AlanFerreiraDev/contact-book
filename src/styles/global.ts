import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: none;
      /* box-shadow: 0 0 0 1px ${({ theme }) => theme['gray-100']}; */
    }

    body {
      background: ${({ theme }) => theme['white']};
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1rem 'Roboto', sans-serif;
    }

`
