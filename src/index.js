import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from '@Styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from 'styled-reset'
import {Provider} from "react-redux"
import {store} from "./Redux/store"

ReactDOM.render(

  <React.StrictMode>
    <GlobalStyles/>
    <Reset/>
    <GlobalStyles/>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


