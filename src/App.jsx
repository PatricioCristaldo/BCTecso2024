import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import EmailError from './components/ValidationRegister/EmailError';
import ValidationRegister from './components/ValidationRegister/ValidationRegister';
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/email-error" element={<EmailError />} />
      <Route path="/validation-register" element={<ValidationRegister />} /> 
    </Routes>
  );
}

export default App;
