import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/login/Login';
import RecoverPassword from './Pages/RecoverPassword';
import './app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recoverpassword" element={<RecoverPassword />} />
    </Routes>
  );
}

export default App;
