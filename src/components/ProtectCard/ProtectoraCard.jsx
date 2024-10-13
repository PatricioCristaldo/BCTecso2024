import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import phoneIcon from "/src/assets/Icons/Phone.svg"
import mailIcon from "/src/assets/Icons/Mail.svg" 
import instaIcon from "/src/assets/Icons/Instagram.svg"
import protectImg from "/src/assets/protect-img.png"

function ProtectoraCard(props, protectora) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='rounded-5'
    >
      <Modal.Header closeButton>
      
      </Modal.Header>
      <Modal.Body>
       <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src={protectImg} alt="" />
        <h3>Animalistas</h3>
        <p>Se parte del cambio</p>
       </div>
          <div>

          </div>
       <div>
            <div className='p-4 d-flex flex-column gap-3'>
              <div className=' d-flex flex-row align-items-center gap-3'>
              <button className='data-btn'>
                <img src={phoneIcon} alt="" />
              </button>
              <p className='fw-bold text-dark fs-6'>{contactInfo.telnum}</p>
              </div>
              <div className=' d-flex flex-row align-items-center gap-3'>
              <button className='data-btn'>
                <img src={mailIcon} alt="" />
              </button>
              <p className='fw-bold text-dark fs-6'> {contactInfo.gmail}</p>
              </div>
              <div className=' d-flex flex-row align-items-center gap-3'>
              <button className='data-btn'>
                <img src={instaIcon} alt="" />
              </button>
              <p className='fw-bold text-dark fs-6'>{contactInfo.instagram}</p>
              </div>
            </div>
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
