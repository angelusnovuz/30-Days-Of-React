import '../styles/Perfil.css'
import avatar from '../img/avatar.jpeg'

const Img = (props) => <img className='avatar' src={props.img} alt='img' />;
const User = (props) => <h3>{props.user}</h3>;
const Descip = (props) => <p>{props.info}</p>;
const Sub = (props) => <h4>{props.subtitle}</h4>;
const Badgets = ({ array }) => {
  const listArray = array.map((e) => <button className='skill'>{e}</button>)
  return listArray
}


function Perfil() {
  const nombre = "ASABENEH YETAYEH";
  const datos = "Senior Developer,Finland";
  const sub = "SKILLS";
  const skills = ["HTML", "CSS", "JS", "SASS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "Gatsby", "Docker", "Heroku", "Git"];
  const fecha = "Joined on Aug 30,2020";

  return(
    <div className='container-perfil'>
      <div>
        <Img img={avatar} />
      </div>
      <div className='avatar-text'>
        <User User={nombre} />
        <Descip info={datos} />
        <Sub subtitle={sub} />
      </div>
      <div>
        <Badgets array={skills} />
      </div>
      <Descip info={fecha} />
    </div>
  )
}

export default Perfil;