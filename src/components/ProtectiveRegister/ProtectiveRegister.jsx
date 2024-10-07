import React, { useState } from 'react';
import "../../App.css"
import './protective-register.css'; // Importar los estilos
import isologo from "../../assets/isologo.svg"
import eyeIcon from '../../assets/eyeIcon.svg';  // Icono para mostrar contraseña
import eyeSlashIcon from '../../assets/eyeSlashIcon.svg';  // Icono para ocultar contraseña

const ProtectiveRegister = () => {
  const [formData, setFormData] = useState({
    nombreProtectora: '',
    descripcion: '',
    email: '',
    password: '',
    confirmarPassword: '',
    ciudad: '',
    calle: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Controlar visibilidad de contraseña

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
    if (formData.password !== formData.confirmarPassword) {
      newErrors.confirmarPassword = 'Las contraseñas no coinciden';
    }
    if (!formData.ciudad) {
      newErrors.ciudad = 'El campo ciudad es requerido';
    }
    if (!formData.calle) {
      newErrors.calle = 'El campo calle es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí va la lógica para enviar el formulario si es válido
      console.log('Formulario enviado correctamente');
    } else {
      console.log('Errores en el formulario');
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
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad*"
            value={formData.ciudad}
            onChange={handleChange}
            className={`${errors.ciudad ? 'error-input' : ''} ${formData.ciudad ? 'filled' : ''}`}
          />
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

        <button type="submit" className="button-submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default ProtectiveRegister;
