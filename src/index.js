import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from '@Styles/theme'
import GlobalStyles from '@Styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <Reset />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


