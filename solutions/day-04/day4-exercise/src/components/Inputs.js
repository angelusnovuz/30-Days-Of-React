import '../styles/Inputs.css'

const titulo = "SUBSCRIBE";
const descripcion = "Sign up with your email address to receive news and updates.";
const boton = "Subscribe";

function Inputs() {
  return(
  <div className='container-input'>
    <div>
      <h1 className='titulo'>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
    <div>
      <input className='input' placeholder='First Name'></input>
      <input className='input' placeholder='First Name'></input>
      <input className='input' placeholder='First Name'></input>
    </div>
    <button className='button'>{boton}</button>
  </div>
  )
}

export default Inputs;