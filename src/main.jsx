import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/BrowserRouter';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
