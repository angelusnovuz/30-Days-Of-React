import '../styles/Perfil.css'
import avatar from '../img/avatar.jpeg'

const nombre = "ASABENEH YETAYEH";
const datos = "Senior Developer,Finland";
const sub = "SKILLS";
const skills = ["HTML", "CSS", "JS", "SASS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analysis", "MYSQL", "GraphQL", "Gatsby", "Docker", "Heroku", "Git"];
const btnSkill = skills.map((skill) => <button className='skill'>{skill}</button>);
const fecha = "Joined on Aug 30,2020";

function Perfil() {
  return(
    <div className='container-perfil'>
    <div>
      <img className='avatar' src={avatar} alt='' />;
    </div>
    <div className='avatar-text'>
      <h3>{nombre}</h3>
      <p>{datos}</p>
      <h4>{sub}</h4>
    </div>
    <div>
      {btnSkill}
    </div>
    <p>{fecha}</p>
  </div>
  )
}

export default Perfil;