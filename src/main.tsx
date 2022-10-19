import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BalanceProvider } from './context/BlanceContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <BalanceProvider>
              <App />
            </BalanceProvider>
        </BrowserRouter>
    </React.StrictMode>
)
