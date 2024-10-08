import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useOnboardingRedirect = ()=> {
    const navigate = useNavigate();

    useEffect(()=>{
        const onboardingCompleted = JSON.parse(localStorage.getItem('onboardingCompleted'));
        if (!onboardingCompleted) {
            navigate('/onboarding');
        }
    }, [navigate]);
}

export default useOnboardingRedirect;