import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import React, { useContext, useEffect } from 'react';
import HomeMascotero from './Pages/HomeMascotero';
import HomeProtectora from './Pages/HomeProtectora';
import Home from './Pages/Home';
import PetDetail from './components/PetDetail/PetDetail';
import './App.css'
import Register from './Pages/Register';
import EmailError from './components/ValidationRegister/EmailError';
import ValidationRegister from './components/ValidationRegister/ValidationRegister';
import SuccessScreen from './components/ValidationRegister/SuccessScreen';
import RecoverPassword from './Pages/RecoverPassword';
import Onboarding from './Pages/onboarding/Onboarding';
import useOnboardingRedirect from './hooks/useOnboardingRedirect'
import ProtectedRoute from './Routes/ProtectedRoute';
import LoggedInProtect from './Routes/LoggedInProtect';
import { AuthContext } from './context/AuthContext';


function App() {

  const { user } = useContext(AuthContext);
  useOnboardingRedirect();


  useEffect(() => {
    console.log(user);
  }, [user]);

  const homeComponent = user?.tipoRegistro?.descripcion === 'Protectora' 
    ? <HomeProtectora /> 
    : <HomeMascotero />;

  return (
    <Routes>
      <Route path="/mascotas/:id" element={<PetDetail/>}/>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/home" element={homeComponent} />
      <Route path="/homeP" element={<HomeProtectora />} />
      <Route path="/register" element={<Register />} />
      <Route path="/email-error" element={<EmailError />} />
      <Route path="/success-screen" element={<SuccessScreen />} /> 
      <Route path="/validation-register" element={<ValidationRegister />} /> 
      <Route path="/" 
        element={ <LoggedInProtect element={ <Login />} />} 
      />
      <Route path="/onboarding" 
        element={ <LoggedInProtect element={<Onboarding />} />} 
      />
      <Route 
        path="/home" 
        element={<ProtectedRoute element={<HomeMascotero />} />} 
      />
      <Route path="/recoverpassword" element={<RecoverPassword />} />

    </Routes>
  );
}

export default App;
