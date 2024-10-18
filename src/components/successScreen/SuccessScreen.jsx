import './successScreen.css';
import SuccessImg from '../../assets/BackgroundImg/SuccessImg.png';
import { useNavigate } from 'react-router-dom'

const SuccessScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="validation-container">
      <div className="image-container">
      <img 
          src={SuccessImg}
          alt="Dog peeking through paper" 
className='image'
        />
      </div>
      <h2 className="title">¡Qué bueno que estés acá!</h2>
      <p className="text" style={{ 
            marginBottom: "30%"
          }}>
      ¡Listo ya ! Ya puedes empezar a usar tu cuenta.
      </p>

      <div className="button-container">
          <button className="button" onClick={() => navigate('/home')}>
          Ir al login
          </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
