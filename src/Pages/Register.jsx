import React, { useState } from 'react';
import ProtectiveRegister from '../components/ProtectiveRegister/ProtectiveRegister';

function Register() {
  const [tipoUsuario, setTipoUsuario] = useState(""); // Estado para almacenar el tipo de usuario seleccionado

  const handleUserSelection = (tipo) => {
    setTipoUsuario(tipo); // Establece el tipo de usuario cuando el usuario selecciona una opción
  };

  return (
    <div className="container mt-5">
      {tipoUsuario === "" && (
        <div className="d-flex justify-content-center">
          <div>
            <h2>Seleccione su tipo de usuario</h2>
            <button
              className="btn btn-primary m-2"
              onClick={() => handleUserSelection("protectora")}
            >
              Protectora
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => handleUserSelection("mascotero")}
            >
              Mascotero
            </button>
          </div>
        </div>
      )}

      {/* Mostrar el componente según el tipo de usuario seleccionado */}
      {tipoUsuario === "protectora" && <ProtectiveRegister />}
      {tipoUsuario === "mascotero" && <MascoteroRegister />}
    </div>
  );
}

export default Register;