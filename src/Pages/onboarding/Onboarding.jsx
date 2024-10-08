import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import SplashScreen from "../../Components/spashScreen/SplashScreen";
import StarterScreen from "../../Components/starterScreens/StarterScreen";
import "./onboarding.css";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("onboardingCompleted");
    if (hasCompletedOnboarding) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (step === 1) {
      const splashTimer = setTimeout(() => {
        setStep(2);
      }, 3000);
      return () => clearTimeout(splashTimer);
    }
  }, [step]);
  
  const completeOnboarding = ()=>{
    localStorage.setItem("onboardingCompleted", "true");
    navigate("/")
  }  

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
        completeOnboarding();
    }
  };

  const handleGoToStep = (customStep) => {
    if (step !== customStep) {
      setStep(customStep);
    }
  };

  return (
    <div className={`full-height ${step !== 1 ? "px-2" : ""}`}>
      {step === 1 && <SplashScreen />}
      {(step === 2 || step == 3) && <StarterScreen step={step} />}
      {step > 1 && (
        <div className="d-flex flex-column mt-3">
          <div className="d-flex justify-content-center gap-1 pt-2 pb-3">
            <button
              type="button"
              className={`stepper-btn ${
                step === 2 ? "bg-secondary-03" : "bg-lightgray"
              }`}
              onClick={() => handleGoToStep(2)}
            ></button>
            <button
              type="button"
              className={`stepper-btn ${
                step === 3 ? "bg-secondary-03" : "bg-lightgray"
              }`}
              onClick={() => handleGoToStep(3)}
            ></button>
          </div>
          <Button
            variant="primary"
            type="button"
            className="align-self-center w-100 custom-primary-btn onboarding-btn"
            onClick={handleNextStep}
          >
            {step === 3 ? "Comenzar" : "Siguiente"}
          </Button>

          {step > 1 && (
            <button
              onClick={() => completeOnboarding()}
              className="omit-link mt-3"
              type="button"
            >
              Omitir
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Onboarding;
