import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';
import { DataContextProvider } from './context/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter base="/">
    <React.StrictMode>
      <UserContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </UserContextProvider>
    </React.StrictMode>
  </HashRouter>
);
