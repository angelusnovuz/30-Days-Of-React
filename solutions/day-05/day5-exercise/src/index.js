import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Images from './components/Images';
import Inputs from './components/Inputs';
import Colors from './components/Colors';
import Perfil from './components/Perfil';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Images />
    <Inputs />
    <Colors />
    <Perfil />
  </React.StrictMode>
);

