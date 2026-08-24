import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WorkshopProvider } from './context/WorkshopContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkshopProvider>
      <App />
    </WorkshopProvider>
  </React.StrictMode>
);
