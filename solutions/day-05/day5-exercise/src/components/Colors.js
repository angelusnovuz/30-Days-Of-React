import '../styles/Colors.css'


//const divColors = colors.map((color) => <div className='color' style={{backgroundColor:color}}>{color}</div>);

const DivColor = ({ array }) => {
  const colorList = array.map((color) => <div className='color' style={{backgroundColor:color}}>{color}</div>)
  return colorList
}

function Colors() {
  const colors = ["#518cef", "#3b10c4", "#9aede6", "#Bee763", "#a30dd0"];

  return(
  <div className='container'>
    <DivColor array={colors} />
  </div>
  )
}

export default Colors;