import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/login/Login';
import RecoverPassword from './Pages/RecoverPassword';
import Onboarding from './Pages/onboarding/Onboarding';
import useOnboardingRedirect from './hooks/useOnboardingRedirect'
import ProtectedRoute from './Routes/ProtectedRoute';
import './app.css'
import LoggedInProtect from './Routes/LoggedInProtect';

function App() {
  useOnboardingRedirect();

  return (
    <Routes>
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
