import './ValidationRegister.css';
import ValidationImg from '../../assets/BackgroundImg/ValidationImg.png';

const ValidationRegister = () => {
  return (
    <div className="validation-container">
      <div className="image-container">
        <img 
          src={ValidationImg}
          alt="Dog peeking through paper" 
          className="image"
        />
      </div>
      <h2 className="title">Te enviamos un correo!</h2>
      <p className="text">
        Revisa tu correo, te va a llegar un mensaje de validación y deberás confirmar tu cuenta para finalizar con el registro.
      </p>
      <p className="note">
        *Recordá revisar en tu casilla de Spam o de Correo no deseado, a veces llega ahí
      </p>
      <div className="button-container">
          <button className="button" onClick={() => window.open('https://mail.google.com', '_blank')}>
            Abrir correo
          </button>
      </div>
    </div>
  );
};

export default ValidationRegister;
