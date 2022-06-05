import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Inputs from './components/Inputs';
import Colors from './components/Colors';
import Perfil from './components/Perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Inputs />
    <Colors />
    <Perfil />
  </React.StrictMode>
);

