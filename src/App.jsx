import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PetDetail from './components/PetDetail/PetDetail';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/mascotas/:id' element={<PetDetail/>}/>
      
    </Routes>
  );
}

export default App;
