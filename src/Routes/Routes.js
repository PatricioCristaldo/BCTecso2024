const express = require('express');
const router = express.Router();
const Protectora = require('../models/Protectora'); // Modelo de la protectora
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

// Ruta para el registro de protectoras
router.post('/protectoras/registro', [
  // Validaciones
  body('nombreProtectora').not().isEmpty().withMessage('El nombre es requerido'),
  body('descripcion').not().isEmpty().withMessage('La descripción es requerida'),
  body('email').isEmail().withMessage('Debe proporcionar un email válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('direccion.ciudad').not().isEmpty().withMessage('La ciudad es requerida'),
  body('direccion.calle').not().isEmpty().withMessage('La calle es requerida')
], async (req, res) => {
  // Manejo de errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombreProtectora, descripcion, email, password, direccion } = req.body;

  try {
    // Verificar si el email ya está registrado
    let protectora = await Protectora.findOne({ email });
    if (protectora) {
      return res.status(409).json({ msg: 'El email ya está registrado' });
    }

    // Crear una nueva protectora
    protectora = new Protectora({
      nombreProtectora,
      descripcion,
      email,
      password,
      direccion
    });

    // Hashear la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    protectora.password = await bcrypt.hash(password, salt);

    // Guardar en la base de datos
    await protectora.save();

    // Enviar respuesta de éxito
    res.status(201).json({ msg: 'Registro exitoso. Por favor, confirma tu correo.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;
