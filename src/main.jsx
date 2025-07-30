import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Wait for the DOM to be ready before mounting React
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-root')
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}) 