import '../styles/DaysColors.css'

const colors = ["#4e417e", "#02dc92", "#dfbaa0", "#d8394e", "#7c31d3", "#7fcfd2", "#0e5d46", "#d98590", "#7923d7", "#6e5eeb", "#2a176b", "dea1d8", "#cbae6f", "#b6841d", "#62df7d", "#9e4d2c", "#393b73", "#8cface", "#1a4f07", "#045529", "#04e754", "#697980", "#018120", "#5bdcc7", "#7010b2", "#c50007", "cfe583", "#cdb58e", "#298b5d", "#58e253", "#a9c3c5", "#66fec5"];

const DivColor = ({ array }) => {
  const list = array.map((e) => <div className='color' style={{backgroundColor:e}}>{e}</div>)
  return list
};

const Title = (props) => { <h1>{props.title}</h1>};
const Subtitle = (props) => { <h2>{props.subtitle}</h2>};

function DaysColors() {
  const title = "30 Days Of React";
  const subtitle = "Hexadecimal Colors";

  return (
    <div className='container'>
      <div className="text">
        <Title title={title} />
        <Subtitle Subtitle={subtitle}/>
      </div>
      <div className='colors'>
        <DivColor array={colors}  />
      </div>
    </div>
  );
}

export default DaysColors;
