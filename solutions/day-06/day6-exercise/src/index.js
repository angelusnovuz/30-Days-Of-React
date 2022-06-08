import React from 'react';
import ReactDOM from 'react-dom/client';
import DaysNumber from './Components/DaysNumber';
import DaysColors from './Components/DaysColors';
import Grafica from './Components/Grafica';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Grafica />
  </React.StrictMode>
);

