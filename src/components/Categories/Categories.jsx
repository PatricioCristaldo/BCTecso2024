import Gato from "../../assets/gato.png"
import Perro from "../../assets/perro.png"
import Hamster from "../../assets/hamster.png"
import Conejo from "../../assets/conejo.png"
import "./Categories.css"


const Categories = () => {

  const animales = [
    {
        nombre: 'Gato',
        icon: Gato,
        id: 1,
    },
    {
        nombre: 'Perro',
        icon: Perro,
        id: 2
    },
    {
        nombre: 'Hamster',
        icon: Hamster,
        id: 3
    },
    {
        nombre: 'Conejo',
        icon: Conejo,
        id: 4
    },

  ];

  return (

    <div className="d-flex buttons-container">
        {animales.map((animal) => (
            <button className="bttn-category" key={animal.id}>
                <img src={animal.icon} alt={animal.nombre} />
                <span>{animal.nombre}</span>
            </button>
        ))}
    </div>
  )
}

export default Categories;