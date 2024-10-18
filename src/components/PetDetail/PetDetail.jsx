import React, { useEffect, useState } from 'react';
import { Card, Carousel, Button, CardBody, CardText } from 'react-bootstrap';
import './petdetail.css';
import ProtectoraCard from '../ProtectCard/ProtectoraCard.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import mapIcon from "/src/assets/Icons/map-pin.svg"
import protectImg from "/src/assets/protect-img.png"
import phoneIcon from "/src/assets/Icons/Phone.svg"


const PetDetail = () => {

  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODM0MzIxZi00ZWEyLTRjNmEtOWQ4Ny0xMTIxOTNhZGZlNjMiLCJ1bmlxdWVfbmFtZSI6ImZhY3VAbXVtYS5jb20iLCJuYmYiOjE3Mjg4NTcxNDAsImV4cCI6MTcyODk0MzU0MCwiaWF0IjoxNzI4ODU3MTQwLCJpc3MiOiJNVU1BLUFQSSIsImF1ZCI6Ik1VTUEtQXVkaWVuY2UifQ.mrxtc67r-dw-0gq5w6jamF3AxkWaBzOOcFZhT0b1s14'; 
  
  
  useEffect(() => {
    const fetchMascota = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/Mascotas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setMascota(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los datos de la mascota');
        setLoading(false);
      }
    };

    fetchMascota();
    
  }, [id]);

  
  if (loading) {
    return <p>Cargando datos de la mascota...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!mascota) {
    return <p>No se encontró la mascota.</p>;
  }

  return (
    <>
      <Card className="pet-container" key={mascota.id}>
        <Carousel className="carousel-container">
          {mascota.fotos.slice(0, 10).map((foto, index) => (
            <Carousel.Item key={index}>
              <img className="d-block img-fluid w-100" src={foto} alt={`Foto ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>

        <Card.Body className="card-body rounded-4">
          <div className="name-container rounded-top">
            <div>
              <h2>{mascota.nombre}</h2>
              <div className="container-center-itms">
                <img src={mapIcon} alt="" />
                <p>{mascota.ciudad}</p>
              </div>
            </div>
            <aside>
              <div className="adoption-btn">{mascota.estado}</div>
            </aside>
          </div>

          <div className="box-container">
            {[
              { label: 'Sexo', value: mascota.sexo },
              { label: 'Raza', value: mascota.raza },
              { label: 'Tamaño', value: mascota.tamano },
              { label: 'Edad', value: `${mascota.edad} años` },
            ].map((item, index) => (
              <div className="box" key={index}>
                <h4 className="fs-6">{item.value}</h4>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <CardBody className="p-0">
            <div className="protectora-card">
              <div className="protectora-card-itms">
                <div>
                  <img src={protectImg} alt="" />
                </div>
                <div className="gap-0" key={mascota.protectoraId}>
                  <p>Protectora</p>
                  <h5>{mascota.protectora.nombre}</h5>
                </div>
              </div>
              <div>
                <button className="data-btn" onClick={() => {
                  setModalShow(true);
                } } >
                  <img src={phoneIcon} alt="" />
                </button>
              </div>
            </div>
          </CardBody>
          <CardText className="pt-4 text-start">
            {mascota.descripcion}
          </CardText>
          <Button className="mt-4 primary sol-adopt-btn container-center-itms">
            Solicitar Adopción
          </Button>
        </Card.Body>
      </Card>

      <ProtectoraCard
        show={modalShow}
        onHide={() => setModalShow(false)}
        mascotaId={mascota.protectora.id}
      />
    </>
  );
};

export default PetDetail;
