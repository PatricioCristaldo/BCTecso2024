import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register';
import EmailError from './components/emailErrorScreen/EmailError';
import ValidationRegister from './components/validationScreen/ValidationRegister';
import SuccessScreen from './components/successScreen/SuccessScreen';
import "./App.css"
import RecoverPassword from './Pages/RecoverPassword';
import Onboarding from './Pages/onboarding/Onboarding';
import useOnboardingRedirect from './hooks/useOnboardingRedirect'
import ProtectedRoute from './Routes/ProtectedRoute';
import './app.css'
import LoggedInProtect from './Routes/LoggedInProtect';
import ProtectiveRegister from './components/ProtectiveRegister/ProtectiveRegister';

function App() {
  useOnboardingRedirect();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/protective" element={<ProtectiveRegister />} />
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
        element={<ProtectedRoute element={<Home />} />} 
      />
      <Route path="/recoverpassword" element={<RecoverPassword />} />
    </Routes>
  );
}

export default App;
