import "./ProtectorsCard.css";


const ProtectorsCard = ({protector}) => {
  return (
    <article className="protectors-card">
        <picture className="profile-picture">
            <img src={protector.foto} alt="" />
        </picture>
        <p className="title">{protector.nombre}</p>
        <p className="description">{protector.descripcion}</p>
    </article>
  )
}

export default ProtectorsCard;