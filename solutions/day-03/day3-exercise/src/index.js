import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css"

import css from './img/css.png'
import html from './img/html.png'
import javascript from './img/javascript.png'
import react from './img/react.png'
import avatar from './img/avatar.jpeg'

const root = ReactDOM.createRoot(document.getElementById('root'));


const img = (
  <div className='container'>
    <div className='titulo'>
      <h1>Front End Technologies</h1>
    </div>
    <div className='img'>
      <img src={html} alt='' />
      <img src={css} alt='' />
      <img src={javascript} alt='' />
      <img src={react} alt='' />
    </div>
  </div>
);

const input = (
  <div className='container-input'>
    <div className='text'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
    </div>
    <div className='inputs'>
      <input className='input' placeholder='First Name'></input>
      <input className='input' placeholder='Last Name'></input>
      <input className='input' placeholder='Email'></input>
    </div>
    <div>
      <button className='button'>Subscribe</button>
    </div>
  </div>
);

const perfil = (
  <div className='container-perfil'>
    <div>
      <img className='avatar' src={avatar} alt='' />
    </div>
    <div className='avatar-text'>
      <h3>ASABENEH YETAYEH</h3>
      <p>Senior Developer,Finland</p>
      <h4>SKILLS</h4>
    </div>
    <div>
      <button className='skill'>HTML</button>
      <button className='skill'>CSS</button>
      <button className='skill'>SASS</button>
      <button className='skill'>JS</button>
      <button className='skill'>React</button>
      <button className='skill'>Redux</button>
      <button className='skill'>Node</button>
      <button className='skill'>MongoDB</button>
      <button className='skill'>Python</button>
      <button className='skill'>Flask</button>
      <button className='skill'>Django</button>
      <button className='skill'>Numpy</button>
      <button className='skill'>Pandas</button>
      <button className='skill'>Data Analysis</button>
      <button className='skill'>MYSQL</button>
      <button className='skill'>GraphQL</button>
      <button className='skill'>Gatsby</button>
      <button className='skill'>Docker</button>
      <button className='skill'>Heroku</button>
      <button className='skill'>Git</button>
    </div>
    <p>Joined on Aug 30,2020</p>
  </div>
);



root.render(
  <React.StrictMode>
    {img}
    {input}
    {perfil}
  </React.StrictMode>
);
