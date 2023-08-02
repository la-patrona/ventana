import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './MainPage'
import './styles.css'

ReactDOM.createRoot( document.getElementById('root')  as HTMLElement).render(
  <React.StrictMode>
    <MainPage  />
  </React.StrictMode>,
)
