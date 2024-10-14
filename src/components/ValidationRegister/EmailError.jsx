import './ValidationRegister.css';
import EmailImg from '../../assets/BackgroundImg/EmailImg.png';
import { useNavigate } from 'react-router-dom'

const EmailError = () => {
  const navigate = useNavigate();
  return (
    <div className="validation-container">
      <div className="image-container">
      <img 
          src={EmailImg}
          alt="Dog peeking through paper" 
          style={{ 
            width: '100vw', 
            height: '70vh', 
            objectFit: 'cover', 
            borderRadius: '50%' 
          }}
        />
      </div>
      <h2 className="title">Este e-mail ya se 
      encuentra registrado</h2>
      <p className="text">
      Si no recordás tu contraseña podés 
cambiarla desde el login ingresando en
el enlace “Olvidé mi contraseña
      </p>

      <div className="button-container">
          <button className="button" onClick={() => navigate('/')}>
          Ir al login
          </button>
      </div>
    </div>
  );
};

export default EmailError;
