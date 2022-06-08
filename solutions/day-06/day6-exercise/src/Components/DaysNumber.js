import '../styles/DaysNumber.css'


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const DivNUmber = ({ array }) => {
  const list = array.map((e) => <div className='number' style={{backgroundColor:e % 2 === 0 ? "#21BF73" : "#FD5E53"}}>{e}</div>)
  return list
};

const Title = (props) => { <h1>{props.title}</h1>};
const Subtitle = (props) => { <h2>{props.subtitle}</h2>};

function DaysNumber() {
  const title = "30 Days Of React";
  const subtitle = "Number Generator";

  return (
    <div className='container'>
      <div>
        <Title title={title} />
        <Subtitle Subtitle={subtitle}/>
      </div>
      <div className='numbers'>
        <DivNUmber array={numbers}  />
      </div>
    </div>
  );
}

export default DaysNumber;
