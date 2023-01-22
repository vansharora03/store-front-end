import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitcher from './components/RouteSwitcher';

//Render to root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitcher />
  </React.StrictMode>
);

