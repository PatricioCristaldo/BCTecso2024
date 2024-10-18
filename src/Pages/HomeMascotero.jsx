import "./Home.css"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import SearchBar from "../components/SearchBar/SearchBar";
import AnimalsCard from "../components/AnimalsCard/AnimalsCard";
import Garfield from "../assets/4b28cb6ef78891d578576987a660a713.jpg"
import Tigri from "../assets/86927dea8b99a94c18244b964e8ddd2b.jpg"
import Cira from "../assets/f9c2314943c874d6a628d8360ac252c8.png"
import Bob from "../assets/c0c0126fc1be6a4fab1ca5c122a59336.png"
import Pia from "../assets/781506b05e378a8594cdd7a285ba8f11.jpg"
import Burko from "../assets/3eb4199b8431fbb96f99f6453e0a8bdb.png"
import Nala from "../assets/34f9e760df0274a281bc0312b49ae8b8.png"
import Animalistas from "../assets/animalistas.png"
import GalgosLibres from "../assets/galgos-libres.png"
import ProtectoraSarmiento from "../assets/protectora-sarmiento.png"
import Aprani from "../assets/aprani.png"
import PichichosAlRescate from "../assets/pichichos-al-rescate.png"
import Gato from "../assets/gato.png"
import Perro from "../assets/perro.png"
import Hamster from "../assets/hamster.png"
import Conejo from "../assets/conejo.png"
import ProtectorsCard from "../components/ProtectorsCard/ProtectorsCard";
import { getAllPets } from "../services/petService";
import { getAllProtectors } from "../services/protectorService";
import { UserContext } from "../context/userContext";


// const animales = [
//   {
//     id: 1,
//     nombre: "Garfield",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Macho",
//     foto: Garfield,
//     especie: "Gato"
//   },
//   {
//     id: 2,
//     nombre: "Tigri",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Hembra",
//     foto: Tigri,
//     especie: "Gato"
//   },
//   {
//     id: 3,
//     nombre: "Cira",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Hembra",
//     foto: Cira,
//     especie: "Gato"
//   },
//   {
//     id: 4,
//     nombre: "Bob",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Macho",
//     foto: Bob,
//     especie: "Perro"
//   },
//   {
//     id: 5,
//     nombre: "Pia",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Hembra",
//     foto: Pia,
//     especie: "Perro"
//   },
//   {
//     id: 6,
//     nombre: "Burko",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Macho",
//     foto: Burko,
//     especie: "Perro"
//   },
//   {
//     id: 7,
//     nombre: "Nala",
//     edad: 4,
//     ciudad: "Rosario (2,5 km)",
//     sexo: "Hembra",
//     foto: Nala,
//     especie: "Perro"
//   },
// ];


const HomeMascotero = () => {

  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [pets, setPets] = useState([]);
  const [protectors, setProtectors] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(pets);
  const [seeAllAnimals, setSeeAllAnimals] = useState(false);
  const [seeAllProtectors, setSeeAllProtectors] = useState(false);
  

  // useEffect(() => {
  //   console.log("Protectors: ",protectors)
  // }, [protectors])

  async function getPets() {
    const response = await getAllPets()
    setPets(response.data)
  }

  async function getProtectors() {
    const response = await getAllProtectors()
    setProtectors(response.data)
  }


  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect( ()=>{
    console.log(user);
  }, [])

  useEffect(() => {
    getPets();
  }, [])

  useEffect(() => {
    getProtectors();
  }, [])

  useEffect(() => {
    filterItems();
  }, [pets,selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = pets.filter((item) => item.tipoAnimal === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...pets]);
    }
  };

  const filtros = [
    {
        category: 'Gato',
        icon: Gato,
        id: 1,
    },
    {
        category: 'Perro',
        icon: Perro,
        id: 2
    },
    {
        category: 'Hamster',
        icon: Hamster,
        id: 3
    },
    {
        category: 'Conejo',
        icon: Conejo,
        id: 4
    },

  ];

  const protectoras = [
    {
      id: 1,
      nombre: "Animalistas",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Se parte del cambio que queres ver en el mundo",
      foto: Animalistas
    },
    {
      id: 2,
      nombre: "Galgos Libres",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Rescatamos galgos del maltrato y los damos en adopción responsable",
      foto: GalgosLibres
    },
    {
      id: 3,
      nombre: "Protectora Sarmiento",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Somos una ONG que alberga a más de 60 animales",
      foto: ProtectoraSarmiento
    },
    {
      id: 4,
      nombre: "Aprani",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Rescatamos, recuperamos, damos en adopción.",
      foto: Aprani
    },
    {
      id: 5,
      nombre: "Pichichos al rescate",
      ciudad: "Rosario (2,5 km)",
      descripcion: "La mejor comunidad cibernética si estás buscando agrandar tu familia",
      foto: PichichosAlRescate
    },

  ];

  return (
    <section id="home-mascotero" className="vh-100">
      <NavigationBar/>
      <main style={{paddingLeft: "15px"}}>
        <SearchBar/>
        <h2>Categorias</h2>
        <div className="d-flex buttons-container">
          {filtros.map((especie) => (
              <button
                onClick={() => handleFilterButtonClick(especie.category)}
                className={`bttn-category ${
                  selectedFilters?.includes(especie.category) ? "active" : ""
                }`}
                key={especie.id}
              >
                  <img src={especie.icon} alt={especie.category} />
                  <span>{especie.category}</span>
              </button>
          ))}
        </div>
        {
          pets.length > 0 ?
          (  <div className="registered-animals">
            { !seeAllProtectors && <div className="d-flex justify-content-between align-items-center label" style={{paddingRight: '10px',marginBottom: '15px',marginTop: '.5rem'}}>
              <h3>Animales</h3>
              <a  onClick={() => setSeeAllAnimals(prevState => !prevState)}>
                {seeAllAnimals ? "Ver menos" : "Ver todos"}
              </a>
            </div>}
            { !seeAllProtectors && !seeAllAnimals ? 
              (
                <div className="d-flex animals-container">
                  { 
                    filteredItems.slice(0,4).map((animal, id) => (
                      <AnimalsCard animal={animal}  imageHeight="210" key={id} maxCard={true} edit={false}/>
                    )) 
                  }
                </div>
              ) : !seeAllProtectors &&
              (
                <div className="d-flex flex-wrap all-animals-container">
                  { 
                    filteredItems.map((animal, id) => (
                      <AnimalsCard animal={animal} imageHeight="130" key={id} maxCard={false}/>
                    )) 
                  }
                </div>
              )
            }
            {
              !seeAllAnimals && 
              <div className="d-flex justify-content-between align-items-center label" style={{paddingRight: '10px',marginBottom: '15px',marginTop: '.5rem'}}>
                <h3>Protectoras</h3>
                <a  onClick={() => setSeeAllProtectors(prevState => !prevState)}>
                  {seeAllProtectors ? "Ver menos" : "Ver todos"}
                </a>
              </div>
            }
            
            {
              !seeAllAnimals && !seeAllProtectors ?
              (
                <div className="d-flex protectors-container">
                  { 
                    protectoras.slice(0,4).map((protectora,id) => (
                      <ProtectorsCard protector={protectora} key={id}/>
                    ))
                  }
                </div>
              ) : !seeAllAnimals &&
              (
                <div className="d-flex flex-wrap all-protectors-container">
                  { 
                    protectors.map((protectora,id) => (
                      <ProtectorsCard protector={protectora} key={id}/>
                    ))
                  }
                </div>
              )
            }
            </div>) :
            (
              <div className="no-animals">
                <p>No hay animales registrados actualmente</p>
              </div>
            )
        }
        
       
        
      </main>
     
    </section>
  );
};

export default HomeMascotero;
