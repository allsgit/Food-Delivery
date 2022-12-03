import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'Context/userContext';
import { DataContextProvider } from 'Context/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </UserContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
