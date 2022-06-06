import '../styles/Inputs.css'

const Input = (props) => <input className='input' placeholder={props.placeholder}></input>;
const Titulo = (props) => <h1>{props.title}</h1>;
const Descrip = (props) => <p>{props.text}</p>;
const Button = (props) => <button className='button'>{props.text}</button>;

function Inputs() {
  const titulo = "SUBSCRIBE";
  const descripcion = "Sign up with your email address to receive news and updates.";
  const boton = "Subscribe";
  
  return(
  <div className='container-input'>
    <div>
      <Titulo title={titulo} />
      <Descrip text={descripcion} />
    </div>
    <div>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
    </div>
    <Button text={boton} />
  </div>
  )
}

export default Inputs;