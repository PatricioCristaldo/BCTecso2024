import "./AnimalsCard.css"
import mapPin from "../../assets/Icons/map-pin.png"
import genderMasc from "../../assets/Icons/male.png"
import genderFem from "../../assets/Icons/fem.png"
import likeIcon from "../../assets/Icons/like.png"
import editIcon from "../../assets/Icons/edit.png"

const AnimalsCard = ({animal,  maxCard, imageHeight,edit}) => {

  return (
    <article className={maxCard ? "animals-card" : "min-animals-card"}>
        <a className="text-decoration-none" href={`/mascotas/${animal.id}`}>
            {edit ? 
                (<button className="card-button">
                    <img src={editIcon} alt="" />
                </button>) : 
                (<button className="card-button">
                    <img src={likeIcon} alt="" />
                </button>)
            }
            <div className="animal-image-container" style={{height: `${imageHeight}px`}}>
                <img src={animal.fotos[0]} />
            </div>
            <div className={maxCard? "animal-info-container" : "min-animal-info-container"}>
                <span className={maxCard? "animal-info" : "min-animal-info"}>
                    <p>{animal.nombre}</p>
                    <img src={animal.sexo == "Macho" ? genderMasc : genderFem} alt="Icono de genero del animal" />
                </span>
                <span className={maxCard? "location-info" : "min-location-info"}>
                    <img src={mapPin} alt="Icono de ubicacion" />
                    <p>{animal.ciudad}</p>
                </span>
            </div>
        </a>

    </article>
  )
}

export default AnimalsCard;