import React, { useState, useEffect } from 'react';
import "../../App.css";
import './protective-register.css'; // Importar los estilos
import isologo from "../../assets/isologo.svg";
import eyeIcon from '../../assets/eyeIcon.svg';  // Icono para mostrar contraseña
import eyeSlashIcon from '../../assets/eyeSlashIcon.svg';  // Icono para ocultar contraseña
import axios from "axios";


const ProtectiveRegister = () => {
  const [formData, setFormData] = useState({
    nombreProtectora: '',
    descripcion: '',
    email: '',
    password: '',
    confirmarPassword: '',
    provincia: '',
    ciudad: '',
    calle: '',
    numero: '',
    piso: '',
    departamento: '',
    sitioWeb: '',
    instagram: '',
    facebook: ''
  });
  

  const [provincias, setProvincias] = useState([]); // Estado para almacenar las provincias
  const [ciudades, setCiudades] = useState([]);  // Estado para almacenar las ciudades basadas en la provincia seleccionada
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Controlar visibilidad de contraseña
  const [loading, setLoading] = useState(false);  // Estado para gestionar el loading
  const [successMessage, setSuccessMessage] = useState('');  // Mensaje de éxito o error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Llamada a la API para obtener las provincias cuando el componente se monta
    axios.get('http://localhost:8081/api/combos/Provincias')
      .then((response) => {
        setProvincias(response.data); // Guardar las provincias en el estado
      })
      .catch((error) => {
        console.error('Error al obtener provincias:', error);
      });
  }, []);

  useEffect(() => {
    if (formData.provincia) {  // Solo hacer la llamada si hay una provincia seleccionada
      axios.get(`http://localhost:8081/api/combos/Ciudades/${formData.provincia}`)
        .then((response) => {
          setCiudades(response.data);  // Guardar las ciudades en el estado
        })
        .catch((error) => {
          console.error('Error al obtener ciudades:', error);
        });
    }
  }, [formData.provincia]);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombreProtectora) {
      newErrors.nombreProtectora = 'El campo nombre protectora es requerido';
    }
    if (!formData.descripcion) {
      newErrors.descripcion = 'El campo descripción es requerido';
    }
    if (!formData.email) {
      newErrors.email = 'El campo email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.password) {
      newErrors.password = 'El campo contraseña es requerido';
    }
    if (!formData.password) {
      newErrors.confirmarPassword = 'El campo confirmar contraseña es requerido';
    }
    if (formData.password !== formData.confirmarPassword) {
      newErrors.confirmarPassword = 'Las contraseñas no coinciden';
    }
    if (!formData.ciudad) {
      newErrors.ciudad = 'El campo ciudad es requerido';
    }
    if (!formData.calle) {
      newErrors.calle = 'El campo calle es requerido';
    }
    if (!formData.provincia) {
      newErrors.provincia = 'El campo provincia es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);  // Activar loading
      setSuccessMessage('');
      setErrorMessage('');

      const dataToSend = {
        nombreProtectora: formData.nombreProtectora,
        descripcion: formData.descripcion,
        email: formData.email,
        password: formData.password,
        direccion: {
          provincia: formData.provincia,
          ciudad: formData.ciudad,
          calle: formData.calle,
          numero: formData.numero || '',  
          piso: formData.piso || '',      
          departamento: formData.departamento || '' 
        },
        sitioWeb: formData.sitioWeb || '',  
        instagram: formData.instagram || '',  
        facebook: formData.facebook || ''  
      };
      

      try {
        console.log(dataToSend);
        axios.post("http://localhost:8081/api/protectoras/registro", { dataToSend })
          .then((response) => {
            console.log("Response:", response.data?.token);
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setSuccessMessage('Registro exitoso. Por favor, confirma tu correo.');
        setFormData({
          nombreProtectora: '',
          descripcion: '',
          email: '',
          password: '',
          confirmarPassword: '',
          ciudad: '',
          calle: '',
          provincia: '',
        });

      } catch (error) {
        // Errores de red o servidor
        setErrorMessage('Error de conexión. Intenta de nuevo más tarde.');
      } finally {
        setLoading(false);  // Desactivar loading
      }
    }
  };

  return (
    <div className="protective-register-container">
      <img src={isologo} alt="Logo" className="protective-register-logo" />
      <form onSubmit={handleSubmit} className="protective-register-form">
        <div>
          <input
            type="text"
            name="nombreProtectora"
            placeholder="Nombre Protectora*"
            value={formData.nombreProtectora}
            onChange={handleChange}
            className={`${errors.nombreProtectora ? 'error-input' : ''} ${formData.nombreProtectora ? 'filled' : ''}`}
          />
          {errors.nombreProtectora && (
            <span className="error-message">{errors.nombreProtectora}</span>
          )}
        </div>

        <div>
          <textarea
            name="descripcion"
            placeholder="Descripción*"
            value={formData.descripcion}
            onChange={handleChange}
            className={`${errors.descripcion ? 'error-input' : ''} ${formData.descripcion ? 'filled' : ''}`}
          />
          {errors.descripcion && (
            <span className="error-message">{errors.descripcion}</span>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email ? 'error-input' : ''} ${formData.email ? 'filled' : ''}`}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="icon-password-toggle">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Contraseña*"
            value={formData.password}
            onChange={handleChange}
            className={`${errors.password ? 'error-input' : ''} ${formData.password ? 'filled' : ''}`}
          />
          <img
            src={showPassword ? eyeIcon : eyeSlashIcon}
            alt="Toggle Password Visibility"
            onClick={togglePasswordVisibility}
            className="password-icon"
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="icon-password-toggle">
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmarPassword"
            placeholder="Confirmar Contraseña*"
            value={formData.confirmarPassword}
            onChange={handleChange}
            className={`${errors.confirmarPassword ? 'error-input' : ''} ${formData.confirmarPassword ? 'filled' : ''}`}
          />
          <img
            src={showPassword ? eyeIcon : eyeSlashIcon}
            alt="Toggle Password Visibility"
            onClick={togglePasswordVisibility}
            className="password-icon"
          />
          {errors.confirmarPassword && (
            <span className="error-message">{errors.confirmarPassword}</span>
          )}
        </div>

        <div>
  <select
    name="provincia"
    value={formData.provincia}
    onChange={handleChange}
    className={`${errors.provincia ? 'error-input' : ''} ${formData.provincia ? 'filled' : ''}`}
  >
    <option value="">Seleccione una provincia*</option>
    {provincias.map((provincia) => (
      <option key={provincia.id} value={provincia.id}>
        {provincia.nombre}
      </option>
    ))}
  </select>
  {errors.provincia && (
    <span className="error-message">{errors.provincia}</span>
  )}
</div>

<div>
  <select
    name="ciudad"
    value={formData.ciudad}
    onChange={handleChange}
    className={`${errors.ciudad ? 'error-input' : ''} ${formData.ciudad ? 'filled' : ''}`}
    disabled={!formData.provincia}
  >
    <option value="">Seleccione una ciudad*</option>
    {ciudades.map((ciudad) => (
      <option key={ciudad.id} value={ciudad.nombre}>
        {ciudad.nombre}
      </option>
    ))}
  </select>
  {errors.ciudad && (
    <span className="error-message">{errors.ciudad}</span>
  )}
</div>

        <div>
          <input
            type="text"
            name="calle"
            placeholder="Calle*"
            value={formData.calle}
            onChange={handleChange}
            className={`${errors.calle ? 'error-input' : ''} ${formData.calle ? 'filled' : ''}`}
          />
          {errors.calle && (
            <span className="error-message">{errors.calle}</span>
          )}
        </div>
        <div className="row-fields">
  <div className="input-group">
    <input
      type="text"
      name="numero"
      placeholder="Número"
      value={formData.numero}
      onChange={handleChange}
      className={`${formData.numero ? 'filled' : ''}`}
    />
  </div>

  <div className="input-group">
    <input
      type="text"
      name="piso"
      placeholder="Piso"
      value={formData.piso}
      onChange={handleChange}
      className={`${formData.piso ? 'filled' : ''}`}
    />
  </div>
</div>



  <div className="input-group">
    <input
      type="text"
      name="departamento"
      placeholder="Departamento"
      value={formData.departamento}
      onChange={handleChange}
      className={`${formData.departamento ? 'filled' : ''}`}
    />
  </div>

  <div className="input-group">
    <input
      type="url"
      name="sitioWeb"
      placeholder="Sitio web"
      value={formData.sitioWeb}
      onChange={handleChange}
      className={`${formData.sitioWeb ? 'filled' : ''}`}
    />
  </div>

  <div className="input-group">
    <input
      type="url"
      name="instagram"
      placeholder="Instagram"
      value={formData.instagram}
      onChange={handleChange}
      className={`${formData.instagram ? 'filled' : ''}`}
    />
  </div>

  <div className="input-group">
    <input
      type="url"
      name="facebook"
      placeholder="Facebook"
      value={formData.facebook}
      onChange={handleChange}
      className={`${formData.facebook ? 'filled' : ''}`}
    />
  </div>
        <button type="submit" className="button-submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default ProtectiveRegister;
