import '../styles/Colors.css'

const colors = ["#518cef", "#3b10c4", "#9aede6", "#Bee763", "#a30dd0"];
const divColors = colors.map((color) => <div className='color' style={{backgroundColor:color}}>{color}</div>);

function Colors() {
  return(
  <div className='container'>
    {divColors}
  </div>
  )
}

export default Colors;