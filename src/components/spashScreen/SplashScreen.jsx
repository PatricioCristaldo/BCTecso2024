import "./splash-screen.css";
import isologotipo from "../../assets/Isologotipo.svg";
import pawPrints from "../../assets/paw-prints.svg";

const SplashScreen = () => {

  return (
    <main className="splash-screen h-100 d-flex flex-column ">
      <div className="h-50 paw-prints-container">
        <img src={pawPrints} className="paw-prints" alt="paw1" />
        <img src={pawPrints} className="paw-prints" alt="paw2" />
        <img src={pawPrints} className="paw-prints" alt="paw3" />
        <img src={pawPrints} className="paw-prints" alt="paw4" />
      </div>
      <div className="d-flex justify-content-center align-items-start">
        <img src={isologotipo} className="isologo" />
      </div>
    </main>
  );
};

export default SplashScreen;
