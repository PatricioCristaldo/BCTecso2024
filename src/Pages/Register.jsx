import React, { useState } from 'react';
import ProtectiveRegister from '../components/ProtectiveRegister/ProtectiveRegister';

const Register = () => {
  const [tipoUsuario, setTipoUsuario] = useState('');

  const handleSelectChange = (e) => {
    setTipoUsuario(e.target.value);
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <label htmlFor="tipoUsuario">Elige tu tipo de usuario:</label>
      <select id="tipoUsuario" onChange={handleSelectChange}>
        <option value="">Selecciona</option>
        <option value="protectora">Protectora</option>
        <option value="mascotero">Mascotero</option>
      </select>

      {tipoUsuario === 'protectora' && <ProtectiveRegister />}
      {tipoUsuario === 'mascotero' && <p>Formulario para mascotero pendiente de implementar</p>}
    </div>
  );
};

export default Register;
