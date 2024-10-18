import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import phoneIcon from "/src/assets/Icons/Phone.svg"
import mailIcon from "/src/assets/Icons/Mail.svg" 
import instaIcon from "/src/assets/Icons/Instagram.svg"
import protectImg from "/src/assets/protectoraIImg.png"
import  React, {useEffect, useState} from 'react';
import axios from 'axios';


function ProtectoraCard({show, onHide, mascotaId}) {
  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjlkNGQ3My02YjYwLTQwYmEtODVjZS1jNmNlMzcyZDQ0MjMiLCJ1bmlxdWVfbmFtZSI6Imx1YW5hQG11bWEuY29tIiwibmJmIjoxNzI5MjEzMjU2LCJleHAiOjE3MjkyOTk2NTYsImlhdCI6MTcyOTIxMzI1NiwiaXNzIjoiTVVNQS1BUEkiLCJhdWQiOiJNVU1BLUF1ZGllbmNlIn0.tyFzzLHw1yiQqvDAMp56JaTPuxDvZ6ybr98qaT6EAuY"

  const [protectora, setProtectora] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProtectora = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8081/api/Protectoras/${mascotaId}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProtectora(response.data);
      } catch (err) {
        setError('Error al cargar los datos de la protectora');
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    if (mascotaId) { 
      fetchProtectora();
    }
  }, [mascotaId]);

  useEffect(() => {
    if (protectora) {
      
    }
  }, [protectora]);
  console.log(mascotaId);

  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className='rounded-5'
  >
    <Modal.Header closeButton>

    </Modal.Header>
    <Modal.Body>
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <img src={protectImg} alt="" className=''/>
        {protectora ? ( 
          <>
            <h3>{protectora.nombreProtectora}</h3>
            <p>{protectora.descripcion}</p>
            <div className='p-4 d-flex flex-column gap-3 justify-content-start align-self-start'>
              <div className='d-flex flex-row align-items-center gap-3'>
                <button className='data-btn'>
                  <img src={phoneIcon} alt="" />
                </button>
                <p className='fw-bold text-dark fs-6'>{contactInfo.telnum}</p>
              </div>
              <div className='d-flex flex-row align-items-center gap-3'>
                <button className='data-btn'>
                  <img src={mailIcon} alt="" />
                </button>
                <p className='fw-bold text-dark fs-6'>{protectora.facebook}</p>
              </div>
              <div className='d-flex flex-row align-items-center gap-3'>
                <button className='data-btn'>
                  <img src={instaIcon} alt="" />
                </button>
                <p className='fw-bold text-dark fs-6'>{protectora.instagram}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </Modal.Body>
  </Modal>
  
  );
}

const contactInfo = {
  telnum: "+1234567890", 
  instagram: "nombredeusuario", 
  gmail: "ejemplo@gmail.com" 
};


export default ProtectoraCard


