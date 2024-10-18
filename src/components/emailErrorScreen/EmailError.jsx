import EmailImg from '../../assets/BackgroundImg/EmailImg.png';
import { useNavigate } from 'react-router-dom'
import './emailError.css';

const EmailError = () => {
  const navigate = useNavigate();
  return (
    <div className="email-container">
      <div className="image-container">
      <img 
          src={EmailImg}
          alt="Dog peeking through paper" 
          style={{ 
            marginTop: "55%",}}
        />
      </div>
      <h2 className="title">Este e-mail ya se 
      encuentra registrado</h2>
      <p className="text"           style={{ 
            marginBottom: "32%",
          }}>
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
