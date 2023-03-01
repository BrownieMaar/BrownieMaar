import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const meta = document.createElement('meta');
meta.httpEquiv = 'Permissions-Policy';
meta.content = "camera 'none'; microphone 'none'";
document.head.appendChild(meta);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
