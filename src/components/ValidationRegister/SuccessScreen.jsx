import './ValidationRegister.css';
import SuccessImg from '../../assets/BackgroundImg/SuccessImg.png';

const SuccessScreen = () => {
  return (
    <div className="validation-container">
      <div className="image-container">
      <img 
          src={SuccessImg}
          alt="Dog peeking through paper" 
          style={{ 
            width: '100vw', 
            height: '60vh', 
            marginTop: "70px"
          }}
        />
      </div>
      <h2 className="title">¡Qué bueno que estés acá!</h2>
      <p className="text">
      ¡Listo ya ! Ya puedes empezar a usar tu cuenta.
      </p>

      <div className="button-container">
          <button className="button" onClick={() => window.open('https://mail.google.com', '_blank')}>
          Ir al login
          </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
