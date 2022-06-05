import '../styles/App.css'

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/javascript.png'
import react from '../img/react.png'


function App() {
  return(
  <div className='container'>
    <div>
      <h1 className='titulo'>Front End Technologies</h1>
    </div>
    <div className='img'>
      <img src={html} alt='' />;
      <img src={css} alt='' />;
      <img src={js} alt='' />;
      <img src={react} alt='' />;
    </div>
  </div>
  )
}

export default App;
