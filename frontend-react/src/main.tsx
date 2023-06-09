import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import 'virtual:windi.css'
import { UserContextProvider } from './components/Providers/UserContextProvider'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </React.StrictMode>,
  )
