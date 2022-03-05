import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from '@Styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Reset/>
    <GlobalStyles/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


