import '../styles/Images.css'
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/javascript.png';
import react from '../img/react.png';

const Title = (props) => <h1>{props.title}</h1>;
const Img = (props) => <img src={props.image} alt="img" />;

function Images() {
  const titulo = "Front End Technologies";

  return (
    <div className='container'>
      <div className='titulo'>
        <Title title={titulo} />
      </div>
      <div className='img'>
        <Img image={html} />
        <Img image={css} />
        <Img image={js} />
        <Img image={react} />
      </div>
    </div>
  );
}

export default Images;
