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
import { AuthContext } from "../context/AuthContext";

const animales = [
  {
    id: 1,
    nombre: "Garfield",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    fotos: [
            "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
    especie: "Gato"
  },
  {
    id: 2,
    nombre: "Tigri",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Gato"
  },
  {
    id: 3,
    nombre: "Cira",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Gato"
  },
  {
    id: 4,
    nombre: "Bob",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Perro"
  },
  {
    id: 5,
    nombre: "Pia",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Perro"
  },
  {
    id: 6,
    nombre: "Burko",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Perro"
  },
  {
    id: 7,
    nombre: "Nala",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    fotos: [
        "https://images.unsplash.com/photo-1643724767394-ebe3e2ff296a?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643505339041-5f6328214385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636302925861-aea7b4010012?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    especie: "Perro"
  },
];


const HomeProtectora = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [pets, setPets] = useState([]);
  const [myPets, setMyPets] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  

  const goToAddPet = () => {
    navigate("/add-pet");
  };

  async function getPets() {
    const response = await getAllPets()
    setPets(response.data)
  }

  useEffect(() => {
    getPets();
  }, [])

  useEffect(() => {
    if (user) {
      const filteredPets = pets.filter((pet) => pet.protectoraId === user.id);
      setMyPets(filteredPets); // Guardar las mascotas filtradas por protectoraId
      setFilteredItems(filteredPets); // Inicializar `filteredItems` con las mascotas de la protectora
    }
  }, [pets, user]);

  
  // Actualiza los filtros seleccionados
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  // Filtrar las mascotas según los filtros seleccionados
  useEffect(() => {
    filterItems();
  }, [myPets, selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map((selectedCategory) =>
        myPets.filter((item) => item.tipoAnimal === selectedCategory)
      );
      setFilteredItems(tempItems.flat()); // Aplanar los arrays y actualizar `filteredItems`
    } else {
      setFilteredItems([...myPets]); // Si no hay filtros, mostrar todas las mascotas de la protectora
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
 

  return (
    <section id="home-protectora" className="vh-100">
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
                myPets.length > 0 ?
                (
                    <div className="registered-animals">
                        <div className="d-flex justify-content-between align-items-center label" style={{paddingRight: '10px',marginBottom: '15px',marginTop: '.5rem'}}>
                        <h3>Animales</h3>
                        </div>
                        <div className="d-flex flex-wrap all-animals-container">
                            { 
                                filteredItems.map((animal, id) => (
                                <AnimalsCard animal={animal} imageHeight="130" key={id} maxCard={false} edit={true}/>
                                )) 
                            }
                        </div>
                    </div>
                ) :
                (
                    <div className="no-animals">
                        <p>No hay animales registrados actualmente</p>
                    </div>
                )
            }
            <button className="bttn-add position-fixed">+</button>
        </main>
     
    </section>
  );
};

export default HomeProtectora;
