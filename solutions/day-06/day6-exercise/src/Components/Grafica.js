import '../styles/Grafica.css';

const countries = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

// Country component
const Country = ({ country: { name, population } }) => {
  return (
    <div>
      <h1 className='title'>{name}</h1>
      <small>{population}</small>
    </div>
  )
}

// countries component
const Countries = ({ array }) => {
  const list = array.map((e) => <Country country={e} />)
  return <div>{list}</div>
}

// text component
const Title = (props) => { <h1>{props.title}</h1>};
const Subtitle = (props) => { <h2>{props.subtitle}</h2>};
const GraficoTitle = (props) => { <h4>{props.subtitle}</h4>};

function Grafica() {
  const title = "30 Days Of React";
  const subtitle = "Number Generator";
  const titleGrafico = "Ten most populated countries";
  return (
    <div className='container'>
      <div>
        <Title title={title} />
        <Subtitle Subtitle={subtitle}/>
        <GraficoTitle subtitle={titleGrafico} />
      </div>
      <div className='numbers'>
        <Countries countries={countries}/>
      </div>
    </div>
  );
}

export default Grafica;